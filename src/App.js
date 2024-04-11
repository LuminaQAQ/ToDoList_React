import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import './App.css'

import MainBody from './components/MainBody'
import SideBar from './components/SideBar'

import myRoutes from './routes'


export default function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        // const view = pathname.split('/')[1] || 'default';
        // const title = routesMeta[view]['title'] || 'ToDoList';

        const curPage = myRoutes.find(item => {
            return item.path === pathname;
        })

        document.title = curPage.meta.title;
    }, [pathname])

    return (
        <div className='todolist-main-container'>
            <SideBar />
            <MainBody />
        </div>
    )
}