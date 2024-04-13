import React, { useState, Fragment } from 'react'
import { subscribe } from 'pubsub-js';

import { fetchFinishedListData, setFinishedListData } from '../../api/api';

import EmptyStatus from '../../components/EmptyStatus';
import SgTodoItem from "../../components/SgTodoItem"

export default function TaskListView() {
    const initData = fetchFinishedListData('finishedListData') || [];
    const [finished, setFinished] = useState(initData);


    subscribe('finishedListData', function (pubkey, valObj) {
        const { localKey, data } = valObj;
        setFinishedListData(localKey, data);
        setFinished(data);
    });


    if (initData.length === 0) {
        return (
            <EmptyStatus />
        )
    }

    return (
        <Fragment>
            {
                finished.map(item => {
                    return (
                        <SgTodoItem key={item.id} {...item} />
                    )
                })
            }
        </Fragment>
    )
}
