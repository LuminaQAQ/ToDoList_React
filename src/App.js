import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import './App.css'
import ContextMenu from './components/ContextMenu';

import MainBody from './components/MainBody'
import SideBar from './components/SideBar'

import myRoutes from './routes'


window.addEventListener('contextmenu', function (e) {
    e.preventDefault();

    const menu = document.querySelector('.context-menu-wrap');
    if (
        e.target.className === "sg-todo-item-wrap" ||
        e.target.className === "sg-todo-item-text" ||
        e.target.className === "user-categories"
    ) {
        menu.style.display = "block";

        menu.style.left = `${e.clientX - 70}px`;
        menu.style.top = `${e.clientY + 20}px`;

        menu.className = "context-menu-wrap show";
    } else {
        menu.style.display = "none";
    }
})

window.addEventListener('click', function () {
    const menu = document.querySelector('.context-menu-wrap');
    menu.style.display = "none";
})

export default function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        const curPage = myRoutes.find(item => {
            return item.path === pathname;
        })

        document.title = curPage?.meta.title || "ToDoList";
    }, [pathname])

    return (
        <div className='todolist-main-container'
        >
            <SideBar />
            <MainBody />
            <ContextMenu />
        </div>
    )
}