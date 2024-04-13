import React from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchfixedToDoGroupSetting, fetchRegularSetting, fetchThemeSetting, setfixedToDoGroupSetting, setRegularSetting, setThemeSetting } from '../../api/api';
import SgRadioItem from '../../components/SgRadioItem';
import SgSwitchItem from '../../components/SgSwitchItem';

import "./index.css"

export default function Setting() {
    const navigate = useNavigate();

    const regularOptionLocal = fetchRegularSetting();
    const fixedToDoGroupLocal = fetchfixedToDoGroupSetting();
    const themeOptionLocal = fetchThemeSetting();


    // 返回上一页
    function back() {
        navigate(-1);
    }

    // 按钮的数据返回后, 处理
    function getSonData(ownership, id, isChecked) {
        switch (ownership) {
            case "regular":
                changeSetting(regularOptionLocal, setRegularSetting, id, isChecked)
                break;
            case "fixed":
                changeSetting(fixedToDoGroupLocal, setfixedToDoGroupSetting, id, isChecked);
                break;
            case "theme":
                changeTheme(id, isChecked);
                break;
            default:
                break;
        }
    }

    // 改变设置
    function changeSetting(oldData, callback, id, isChecked, fn) {
        const res = oldData.filter(item => {
            if (item.title === id) {
                item.checked = isChecked;
                return item;
            }

            return item;
        })

        callback(res);

        if (fn) fn();
    }

    // 改变主题
    function changeTheme(type, isChecked) {
        const res = themeOptionLocal.filter(item => {
            item.checked = false;

            if (item.id === type) item.checked = true;

            return item;
        })

        setThemeSetting(res);
    }

    return (
        <section className="setting-container">
            <section className="setting-wrap">
                {/* ------ 顶部 ----- */}
                {/* #region */}
                <header className='setting-header'>
                    <section onClick={back} className='setting-header-back'>&lt;</section>
                    <section className='setting-header-title'>设置</section>
                </header>
                <hr />
                {/* #endregion */}
                {/* --------End------ */}

                <section className='setting-body'>

                    {/* ------ 常规设置 ----- */}
                    {/* #region */}
                    <section className='regular-option'>
                        <h3>常规</h3>
                        <section className='option-list-wrap'>
                            {
                                regularOptionLocal.map(item => {
                                    return (
                                        <SgSwitchItem key={item.title} row updateData={getSonData} {...item} />
                                    )
                                })
                            }
                        </section>
                    </section>
                    <hr />
                    {/* #endregion */}
                    {/* --------End------ */}


                    {/* ------ 主题 ----- */}
                    {/* #region */}
                    <section className='theme-option'>
                        <h3>主题</h3>
                        <section className='option-list-wrap'>
                            {
                                themeOptionLocal.map(item => {
                                    return (
                                        <SgRadioItem
                                            key={item.id}
                                            {...item}
                                            onChange={getSonData}
                                        />
                                    )
                                })
                            }
                        </section>
                    </section>
                    <hr />
                    {/* #endregion */}
                    {/* --------End------ */}


                    {/* ------ 智能列表 ----- */}
                    {/* #region */}
                    <section className='theme-option'>
                        <h3>智能列表</h3>
                        <section className='option-list-wrap'>
                            {
                                fixedToDoGroupLocal.map(item => {
                                    return (
                                        <SgSwitchItem key={item.title} row updateData={getSonData} {...item} />
                                    )
                                })
                            }
                        </section>
                    </section>
                    {/* #endregion */}
                    {/* --------End------ */}



                    {/* ------ 关于 ----- */}
                    {/* #region */}
                    <hr />
                    <section style={{ textAlign: 'center', marginBottom: "1rem" }}>
                        <div>To Do List-by </div>
                        <div style={{ color: "gray" }}>© 2024 by Lumina - version: 0.0.1</div>
                    </section>
                    {/* #endregion */}
                    {/* --------End------ */}

                </section>
            </section>
        </section >
    )
}
