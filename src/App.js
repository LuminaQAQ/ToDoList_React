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
import { deleteToDo, initLocalData } from './api/api'
initLocalData();


const tempMenu = {
    localkey: '',
    id: '',
}
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
        menu.style.left = `${e.clientX - 70}px`;
        menu.style.top = `${e.clientY + 20}px`;

        menu.className = "context-menu-wrap show";

        tempMenu.id = e.target.id;

        // console.log(e.target.id, tempMenu.localkey);
        // const a = getItem(tempMenu.localkey);
        // console.log(a);
    } else {
        menu.className = "context-menu-wrap";
    }
})
// #endregion
// ------- end -------

// ------- 关闭菜单事件 -------
// #region
window.addEventListener('click', function (e) {
    const menu = document.querySelector('.context-menu-wrap');

    // 如果点击菜单
    if (e.target.className === "sg-option" || e.target.classList.contains('sg-option')) {
        const option = e.target.id.split('-')[2];

        switch (option) {
            case 'today':
                console.log(option);
                break;
            case 'important':
                console.log(option);
                break;
            case 'finished':
                console.log(option);
                break;
            case 'delete':
                deleteToDo(tempMenu.localkey, tempMenu.id);
                break;

            default:
                break;
        }
    }


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

        try {
            tempMenu.localkey = curPage.path.slice(1) + "ListData";
        } catch (error) { }


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