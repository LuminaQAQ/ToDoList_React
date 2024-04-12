import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SgRadioItem from '../../components/SgRadioItem';
import SgSwitchItem from '../../components/SgSwitchItem';

import "./index.css"

export default function Setting() {
    const navigate = useNavigate();

    const themeOption = [
        {
            id: "light",
            title: "浅色主题",
            name: "theme",
            checked: false,
        },
        {
            id: "dark",
            title: "深色主题",
            name: "theme",
            checked: true,
        },
        {
            id: "default",
            title: "默认主题",
            name: "theme",
            checked: false,
        },
    ];

    const [theme, setTheme] = useState(themeOption)

    function back() {
        navigate(-1);
    }

    function getSonData(isChecked) {
        // console.log(isChecked);
    }

    function changeTheme(type) {
        const temp = theme.filter(item => {
            item.checked = false;

            if (item.id === type) item.checked = true;

            return item;
        })

        setTheme(temp);
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
                            <SgSwitchItem row title="在顶部添加新任务" updateData={getSonData} />
                            <SgSwitchItem row title="将带有星标的任务移至顶部" updateData={getSonData} />
                            <SgSwitchItem row title="在删除前确认" updateData={getSonData} />
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
                                theme.map(item => {
                                    return (
                                        <SgRadioItem
                                            key={item.id}
                                            {...item}
                                            onChange={changeTheme}
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
                            <SgSwitchItem row title="重要" updateData={getSonData} />
                            <SgSwitchItem row title="全部" updateData={getSonData} />
                            <SgSwitchItem row title="已完成" updateData={getSonData} />
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
