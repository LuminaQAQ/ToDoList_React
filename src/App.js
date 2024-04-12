import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import './App.css'

// 菜单组件
import ContextMenu from './components/ContextMenu';

// 一般组件
import MainBody from './components/MainBody'
import SideBar from './components/SideBar'

// 路由表
import myRoutes from './routes'

// 初始化本地储存
import { initLocalData } from './api/api'
initLocalData();

// ------- 右键开启菜单事件 -------
// #region
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();


    const menu = document.querySelector('.context-menu-wrap');
    if (
        e.target.className === "sg-todo-item-wrap" ||
        e.target.className === "sg-todo-item-text" ||
        e.target.className === "user-categories"
    ) {
        // menu.style.display = "block";

        menu.style.left = `${e.clientX - 70}px`;
        menu.style.top = `${e.clientY + 20}px`;

        menu.className = "context-menu-wrap show";
    } else {
        menu.className = "context-menu-wrap";
    }
})
// #endregion
// ------- end -------

// ------- 关闭菜单事件 -------
// #region
window.addEventListener('click', function () {
    const menu = document.querySelector('.context-menu-wrap');

    menu.className = "context-menu-wrap";
})
// #endregion
// ------- end -------

export default function App() {
    const { pathname } = useLocation();

    // ------- 路由监测, 更改title -------
    // #region
    useEffect(() => {
        const curPage = myRoutes.find(item => {
            return item.path === pathname;
        })

        document.title = curPage?.meta.title || "ToDoList";
    }, [pathname])
    // #endregion
    // ------- end -------

    return (
        <div className='todolist-main-container'
        >
            <SideBar />
            <MainBody />
            <ContextMenu />
        </div>
    )
}