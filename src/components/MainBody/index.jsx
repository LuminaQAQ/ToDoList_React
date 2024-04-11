import React from 'react'
import {  useRoutes } from 'react-router-dom'

import MyRoutes from '../../routes/'

import SgPageTitle from '../SgPageTitle'

import "./index.css"
import "../../asserts/style/mobile.css"

export default function MainBody() {
    const routes = useRoutes(MyRoutes);

    return (
        <section className='todolist-main-wrap'>
            {/* ------ nav占位符 ----- */}
            {/* #region */}
            <nav className='mobile-nav-placeholder-wrap'></nav>
            {/* #endregion */}
            {/* --------End------ */}

            {/* ------ 页面标题 ----- */}
            {/* #region */}
            <SgPageTitle />
            {/* #endregion */}
            {/* --------End------ */}

            {/* ------ 主要内容(路由页面) ----- */}
            {/* #region */}
            <section className='router-view'>
                {routes}
            </section>
            <hr />
            {/* #endregion */}
            {/* --------End------ */}

            {/* ------ 添加todo ----- */}
            {/* #region */}
            <section className='add-task-wrap'>
                <section className=''>
                </section>
                <input className='sg-todo-item-text' type="text" placeholder='添加任务' />

                <section className='sg-todo-item-icon-check'></section>
                <section className='sg-todo-item-icon-favorite'></section>
            </section>
            {/* #endregion */}
            {/* --------End------ */}
        </section>
    )
}
