import React, { useState, Fragment } from 'react'
import { useLocation } from 'react-router-dom';

import { subscribe } from 'pubsub-js';
import { fetchData } from '../../utils/handleData';

import EmptyStatus from '../../components/EmptyStatus';
import SgTodoItem from "../../components/SgTodoItem"

export default function TaskListView() {
    const { pathname } = useLocation();

    const initData = fetchData(pathname.slice(1));
    const [allTask, setAllTask] = useState(initData);


    subscribe('allTask', function (pubkey, data) {
        setAllTask(data);
    });


    if (initData.length === 0) {
        return (
            <EmptyStatus />
        )
    }

    return (
        <Fragment>
            {
                allTask.map(item => {
                    return (
                        <SgTodoItem key={item.id} {...item} />
                    )
                })
            }
        </Fragment>
    )
}
