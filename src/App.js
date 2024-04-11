import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import './App.css'

import MainBody from './components/MainBody'
import SideBar from './components/SideBar'

import routesMeta from './routes/meta.js'


export default function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        const view = pathname.split('/')[1] || 'default';
        const title = routesMeta[view]['title'] || 'ToDoList';
        
        document.title = title;
    }, [pathname])

    return (
        <div className='todolist-main-container'>
            <SideBar />
            <MainBody />
        </div>
    )
}