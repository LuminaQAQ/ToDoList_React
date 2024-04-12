import { subscribe } from 'pubsub-js';
import React, { Fragment, useState } from 'react'
import { fetchImportantData, setImportantData } from '../../api/api';

import EmptyStatus from '../../components/EmptyStatus'
import SgTodoItem from '../../components/SgTodoItem'

export default function ImportantView() {
    const initData = fetchImportantData('importantListData') || [];
    const [importantList, setImportantList] = useState(initData);

    subscribe('importantListData', function (pubkey, valObj) {
        const { localKey, data } = valObj;
        setImportantData(localKey, data);
        setImportantList(data);
    });


    if (initData.length === 0) {
        return (
            <EmptyStatus />
        )
    }

    return (
        <Fragment>
            {
                importantList.map(item => {
                    return (
                        <SgTodoItem key={item.id} {...item} />
                    )
                })
            }
        </Fragment>
    )
}
