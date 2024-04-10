import React from 'react'

import './App.css'

import MainBody from './components/MainBody'
import SideBar from './components/SideBar'


export default function App() {
    return (
        <div className='todolist-main-container'>
            <SideBar />
            <MainBody />
        </div>
    )
}