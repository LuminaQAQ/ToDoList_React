import React, { Fragment, useEffect, useState } from 'react'
import { subscribe } from "pubsub-js"
import { nanoid } from 'nanoid'

import "./index.scss"
import { useLocation } from 'react-router-dom';
import SgTodoItem from '../SgTodoItem';
import { alterTodoTodayData, deleteData, fetchData } from '../../utils/handleData';
import { fetchConfirmBeforeDelete } from '../../api/api';

export default function TodoUpdateBar() {

    const { pathname } = useLocation();

    const [isOpenBar, setIsOpenBar] = useState(false);
    // eslint-disable-next-line
    const [content, setContent] = useState('');
    const [id, setId] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('');
    const [options, setOptions] = useState({});

    useEffect(() => {
        setIsOpenBar(false);
    }, [pathname])

    subscribe('openUpdateBar', function (pubkey, data) {
        let option = fetchData();
        option = option.filter(item => {
            return item.id === data.id;
        })[0];

        try {
            setOptions(option);
            setId(option.id);
            setDate(option.date);
            setContent(option.content);
            setType(option.type);
        } catch (e) { }

        setIsOpenBar(true);
    })

    function changeTodayType() {
        alterTodoTodayData(pathname.slice(1), id, type);
        setIsOpenBar(false);
    }

    function handleDeleteToDo() {
        // 调取设置
        let setting = fetchConfirmBeforeDelete();

        // 如果设置为真
        if (setting.checked && setting.checked === true) {
            const flag = this.confirm('确认删除这条ToDo吗?');
            if (flag) deleteData(pathname.slice(1), type, id);
        } else {
            deleteData(pathname.slice(1), type, id);
        }

        setIsOpenBar(false);
    }


    function closeBarStyle() {
        return isOpenBar === false ? 'todo-update-bar close' : 'todo-update-bar';
    }

    function closeBar() {
        setIsOpenBar(!isOpenBar);
    }

    return (
        <section className={closeBarStyle()}>
            <header className='todo-update-header'>
                <section className='todo-update-header-content'>修改</section>
                <section onClick={closeBar}>x</section>
            </header>

            <section className='todo-update-center'>
                <SgTodoItem isEdit key={nanoid()} pathname={pathname.slice(1)} {...options} />

                <section className='sg-func-item' onClick={changeTodayType}>
                    <Fragment>
                        {type === 'today' ? '从"我的一天"移除' : '添加到"我的一天"'}
                    </Fragment>
                </section>
            </section>

            <footer className='todo-update-footer'>
                <section className='todo-update-footer-time'>创建于{date}</section>
                <section className='delete-icon' onClick={handleDeleteToDo}></section>
            </footer>
        </section>
    )
}
