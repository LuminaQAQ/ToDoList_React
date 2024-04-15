import { nanoid } from 'nanoid';
import React from 'react'
import { publish } from 'pubsub-js'
import { useNavigate } from 'react-router-dom'

import { changeToDoListBackgroundSetting, fetchfixedToDoGroupSetting, fetchRegularSetting, fetchThemeSetting, setfixedToDoGroupSetting, setRegularSetting, setThemeSetting } from '../../api/api';
import SgRadioItem from '../../components/SgRadioItem';
import SgSwitchItem from '../../components/SgSwitchItem';
import { fetchSidebarData } from '../../utils/handleData';

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
                changeSetting(regularOptionLocal, setRegularSetting, id, isChecked);
                break;
            case "fixed":
                changeSetting(fixedToDoGroupLocal, setfixedToDoGroupSetting, id, isChecked);
                publish('sidebar-reflash', fetchSidebarData());
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
    function changeTheme(type, bg_img) {
        const res = themeOptionLocal.filter(item => {
            item.checked = false;

            if (item.id === type) item.checked = true;

            return item;
        })

        setThemeSetting(res);
    }

    // 改变背景
    function changBackgroundImage(e) {
        setTimeout(() => {
            const img = e.target.classList[1];

            changeToDoListBackgroundSetting(img);
        }, 10);
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
                                        <SgSwitchItem key={nanoid()} row updateData={getSonData} {...item} />
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
                                            key={nanoid()}
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
                                        <section key={nanoid()} style={item.checked !== undefined ? { display: 'block' } : { display: 'none' }}>
                                            <SgSwitchItem row updateData={getSonData} {...item} />
                                        </section>
                                    )
                                })
                            }
                        </section>
                    </section>
                    <hr />
                    {/* #endregion */}
                    {/* --------End------ */}


                    {/* ------ todo栏背景 ----- */}
                    {/* #region */}
                    <section className='bg-choice-option'>
                        <h3>背景</h3>
                        <section className='option-list-wrap'>
                            <section className='sg-bg-change-wrap flower-field'
                                onClick={changBackgroundImage}
                            />
                            <section className='sg-bg-change-wrap sunset-glow'
                                onClick={changBackgroundImage}
                            />
                            <section className='sg-bg-change-wrap mountain'
                                onClick={changBackgroundImage}
                            />
                            <section className='sg-bg-change-wrap fancy'
                                onClick={changBackgroundImage}
                            />
                            <section className='sg-bg-change-wrap hilltop'
                                onClick={changBackgroundImage}
                            />
                            <section className='sg-bg-change-wrap wriggle'
                                onClick={changBackgroundImage}
                            />
                            <section className='sg-bg-change-wrap snow'
                                onClick={changBackgroundImage}
                            />
                            <section className='sg-bg-change-wrap autumn'
                                onClick={changBackgroundImage}
                            />

                            {/* 纯色背景 */}
                            <section className='sg-bg-change-wrap black-bg'
                                onClick={changBackgroundImage}
                            />
                            <section className='sg-bg-change-wrap skyblue-bg'
                                onClick={changBackgroundImage}
                            />
                            <section className='sg-bg-change-wrap green-bg'
                                onClick={changBackgroundImage}
                            />
                            <section className='sg-bg-change-wrap white-bg'
                                onClick={changBackgroundImage}
                            />
                        </section>
                    </section>
                    {/* #endregion */}
                    {/* --------End------ */}



                    {/* ------ 关于 ----- */}
                    {/* #region */}
                    <hr />
                    <section style={{ textAlign: 'center', marginBottom: "1rem" }}>
                        <div>To Do List</div>
                        <div style={{ color: "gray" }}>© 2024 by Lumina - version: 0.0.1</div>
                    </section>
                    {/* #endregion */}
                    {/* --------End------ */}

                </section>
            </section>
        </section >
    )
}
