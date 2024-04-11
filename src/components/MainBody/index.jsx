import React, { useState } from 'react'
import { useRoutes } from 'react-router-dom'

import MyRoutes from '../../routes/'

import SgPageTitle from '../SgPageTitle'

import SideBar from '../SideBar'

import "./index.css"
import "../../asserts/style/mobile.css"

export default function MainBody() {
    const routes = useRoutes(MyRoutes);

    const [isHide, setIsHide] = useState(true);
    const [todoText, setTodoText] = useState('');

    function handleMobileNav() {
        if (isHide) {
            setIsHide(false);
        } else {
            setIsHide(true);
        }
    }

    function handleText(e) {
        setTodoText(e.target.value);
    }

    function addList() {
        if (todoText === "") {
            return alert("请输入");
        } else {
            console.log("add", todoText);
        }
    }

    return (
        <section className='todolist-main-wrap'>
            {/* ------ nav占位符 ----- */}
            {/* #region */}
            <nav
                className='mobile-nav-placeholder-wrap'
                onClick={handleMobileNav}
            ></nav>

            <div
                className={isHide ? "mobile-nav hide" : 'mobile-nav'}
            >
                <SideBar />
            </div>

            <div
                onClick={handleMobileNav}
                className={isHide ? "mobile-nav-mask hide" : 'mobile-nav-mask'}
            ></div>
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
                {/* <section className=''>
                </section> */}
                <input
                    className='sg-todo-item-text'
                    type="text"
                    placeholder='添加任务'
                    onKeyUp={handleText}
                />

                <section
                    className={todoText === '' ? 'sg-todo-item-icon-check' : 'sg-todo-item-icon-add'}
                    onClick={addList}
                ></section>
                {/* <section className='sg-todo-item-icon-favorite'></section> */}
            </section>
            {/* #endregion */}
            {/* --------End------ */}
        </section >
    )
}
