import React from 'react'
import { Outlet } from 'react-router-dom'
import SgPageTitle from '../SgPageTitle'

import "./index.css"



export default function MainBody() {
    return (
        <section className='todolist-main-wrap'>
            {/* ------ nav占位符 ----- */}
            {/* #region */}
            <nav className='meadia-nav-placeholder-wrap'>
                nav-icon
            </nav>
            {/* #endregion */}
            {/* --------End------ */}

            {/* ------ 页面标题 ----- */}
            {/* #region */}
            <SgPageTitle />
            {/* #endregion */}
            {/* --------End------ */}

            {/* ------ 主要内容(路由页面) ----- */}
            {/* #region */}
            <section className=''>
                <ol>
                    <li>todo1</li>
                    <li>todo2</li>
                    <li>todo3</li>
                </ol>
            </section>
            {/* #endregion */}
            {/* --------End------ */}

            {/* ------ name ----- */}
            {/* #region */}
            <section className='add-task-wrap'>
                add-task
            </section>
            {/* #endregion */}
            {/* --------End------ */}

            <Outlet />
        </section>
    )
}
