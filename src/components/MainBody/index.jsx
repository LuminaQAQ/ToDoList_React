import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'

import MyRoutes from '../../routes/'

import SgPageTitle from '../SgPageTitle'

import SideBar from '../SideBar'

import "./index.css"
import "../../asserts/style/mobile.css"

export default function MainBody() {
    const routes = useRoutes(MyRoutes);

    const [isHide, setIsHide] = useState(true);

    const todoInputRef = useRef();
    const [todoText, setTodoText] = useState('');

    const { pathname } = useLocation();

    // ------- nav的展开与关闭 -------
    // #region
    function handleMobileNav() {
        if (isHide) {
            setIsHide(false);
        } else {
            setIsHide(true);
        }
    }
    // #endregion
    // ------- end -------

    // ------- 更新ToDo框的值 -------
    // #region
    function handleText() {
        setTodoText(todoInputRef.current.value);
    }
    // #endregion
    // ------- end -------

    // ------- 添加ToDo -------
    // #region
    function addList() {
        if (todoText === "") {
            // return alert("请输入");
            return false;
        } else {
            todoInputRef.current.value = '';
            setTodoText('');
            console.log("add", todoText);
        }
    }
    // #endregion
    // ------- end -------

    // ------- 路由跳转时, nav关闭 -------
    // #region
    useEffect(() => {
        setTodoText('');
        todoInputRef.current.value = '';
        setIsHide(true);
    }, [pathname])
    // #endregion
    // ------- end -------

    return (
        <section className='todolist-main-wrap'>
            {/* ------ nav占位符 ----- */}
            {/* #region */}
            <nav className='todolist-main-nav'>
                <section
                    className='mobile-nav-placeholder-wrap'
                    onClick={handleMobileNav}
                ></section>

                <section
                    className={isHide ? "mobile-nav hide" : 'mobile-nav'}
                >
                    <SideBar />
                </section>

                <section
                    onClick={handleMobileNav}
                    className={isHide ? "mobile-nav-mask hide" : 'mobile-nav-mask'}
                ></section>
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
                    ref={todoInputRef}
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
