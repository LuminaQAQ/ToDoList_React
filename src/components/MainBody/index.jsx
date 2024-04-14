import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'

// 路由表
import MyRoutes from '../../routes/'

// 一般组件
import SgPageTitle from '../SgPageTitle'
import SideBar from '../SideBar'

import "./index.css"
import "../../asserts/style/mobile.css"

// 存储处理
import { setData } from '../../utils/handleData'

export default function MainBody() {
    const { pathname } = useLocation();
    const routes = useRoutes(MyRoutes);

    const [isHide, setIsHide] = useState(true);

    const todoInputRef = useRef();
    const [todoText, setTodoText] = useState('');

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
    function handleText(e) {
        if (e.keyCode === 13) addList();

        setTodoText(todoInputRef.current.value);
    }
    // #endregion
    // ------- end -------

    // ------- 添加ToDo -------
    // #region
    function addList() {
        if (todoText === "") return false;

        // 清空输入框的值
        todoInputRef.current.value = '';
        setTodoText('');

        return setData(todoText, pathname.slice(1));
    }

    function handleAddNodeDisplay() {
        if (pathname.slice(1) === "finished" || pathname.slice(1) === "search")
            return { display: 'none' };
        else
            return { display: 'flex' };
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
            <section
                className='add-task-wrap'
                style={handleAddNodeDisplay()}
            >
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
