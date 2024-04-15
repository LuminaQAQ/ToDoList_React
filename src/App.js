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
import { changeToDoListBackgroundSetting, fetchConfirmBeforeDelete, initLocalData } from './api/api'
import { alterTodoFinishedData, alterTodoImportantData, alterTodoTodayData, deleteData, fetchData } from './utils/handleData';
import { getItem } from './utils/localStroge';
initLocalData();


let tempMenu = {
    route: '',
    id: '',
    type: '',
    isFinished: false,
    isImportant: false,
};


// ------- 右键开启菜单事件 -------
// #region
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();

    const menu = document.querySelector('.context-menu-wrap');
    const tempNode = menu.querySelectorAll('.context-menu-basic-wrap .sg-option');
    const addToToday = tempNode[0];
    const addToImportant = tempNode[1];
    const addToFinished = tempNode[2];

    if (
        e.target.className === "sg-todo-item-wrap" ||
        e.target.className === "sg-todo-item-text" ||
        e.target.className === "user-categories"
    ) {
        menu.style.left = `${e.clientX - 70}px`;
        menu.style.top = `${e.clientY + 20}px`;

        menu.className = "context-menu-wrap show";

        let temp = fetchData('allTask');
        temp.filter(item => {
            if (item.id === e.target.id) {
                tempMenu.id = item.id;
                tempMenu.type = item.type;
                tempMenu.isFinished = item.isFinished;
                tempMenu.isImportant = item.isImportant;


                // ------- 右键菜单选项改变 -------
                // #region

                // 恢复菜单默认值
                addToToday.style.display = "block";
                addToFinished.innerHTML = '标记为"已完成"';
                addToImportant.innerHTML = '标记为"重要"';
                addToToday.innerHTML = '标记为"我的一天"';

                // 某些情况下菜单选项隐藏
                if (tempMenu.route === "finished")
                    addToToday.style.display = "none";

                // 某些情况下菜单选项名字改变
                if (tempMenu.isFinished) addToFinished.innerHTML = '标记为"未完成"';
                if (tempMenu.isImportant) addToImportant.innerHTML = '删除"重要"标记';
                if (tempMenu.route === "today") addToToday.innerHTML = '删除"我的一天"标记';


                // #endregion
                // ------- end -------
            }

            return item;
        })
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
                alterTodoTodayData(tempMenu.route, tempMenu.id, tempMenu.type)
                break;
            case 'important':
                alterTodoImportantData(tempMenu.route, tempMenu.id, !tempMenu.isImportant);
                break;
            case 'finished':
                alterTodoFinishedData(tempMenu.route, tempMenu.id, !tempMenu.isFinished);
                break;
            case 'delete':
                // 调取设置
                let setting = fetchConfirmBeforeDelete();

                // 如果设置为真
                if (setting.checked && setting.checked === true) {
                    const flag = this.confirm('确认删除这条ToDo吗?');
                    if (flag) deleteData(tempMenu.route, tempMenu.type, tempMenu.id);
                } else {
                    deleteData(tempMenu.route, tempMenu.type, tempMenu.id);
                }

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
            changeToDoListBackgroundSetting(getItem('backgroundImg'));
            tempMenu.route = pathname.slice(1);
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