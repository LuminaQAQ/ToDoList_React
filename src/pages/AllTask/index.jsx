import React, { useState, Fragment } from 'react'
import { subscribe } from 'pubsub-js';

import { fetchAllTaskListData, setAllTaskListData } from '../../api/api';

import EmptyStatus from '../../components/EmptyStatus';
import SgTodoItem from "../../components/SgTodoItem"

export default function TaskListView() {
    const initData = fetchAllTaskListData('allTaskListData') || [];
    const [allTask, setAllTask] = useState(initData);


    subscribe('allTaskListData', function (pubkey, data) {
        setAllTaskListData(data);
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
