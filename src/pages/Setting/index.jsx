import React from 'react'
import { useNavigate } from 'react-router-dom'
import SgSwitchItem from '../../components/SgSwitchItem';

import "./index.css"

export default function Setting() {
    const navigate = useNavigate();

    function back() {
        navigate(-1);
    }

    function getSonData(isChecked) {
        console.log(isChecked);
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
                            <SgSwitchItem title="在顶部添加新任务" updateData={getSonData} />
                            <SgSwitchItem title="将带有星标的任务移至顶部" updateData={getSonData} />
                            <SgSwitchItem title="在删除前确认" updateData={getSonData} />
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
                            <label htmlFor="theme">
                                <input type="radio" name="theme" /> 浅色主题
                                <input type="radio" name="theme" /> 深色主题
                                <input type="radio" name="theme" /> 默认主题
                            </label>
                        </section>
                    </section>
                    <hr />
                    {/* #endregion */}
                    {/* --------End------ */}


                    {/* ------ 智能列表 ----- */}
                    {/* #region */}
                    <section className='theme-option'>
                        <h3>主题</h3>
                        <section className='option-list-wrap'>
                            <section>
                                <div className="icon">icon</div>
                                <div className="title">title</div>
                                <div className="switch">switch</div>
                            </section>
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
