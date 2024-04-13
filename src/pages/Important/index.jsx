import React, { Fragment, useState } from 'react'
import { subscribe } from 'pubsub-js';

import { fetchImportantData, setImportantData } from '../../api/api';

import EmptyStatus from '../../components/EmptyStatus'
import SgTodoItem from '../../components/SgTodoItem'

export default function ImportantView() {
    const initData = fetchImportantData('importantListData') || [];
    const [importantList, setImportantList] = useState(initData);

    subscribe('importantListData', function (pubkey, data) {
        setImportantData(data);
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
                        <SgTodoItem important key={item.id} {...item} />
                    )
                })
            }
        </Fragment>
    )
}
