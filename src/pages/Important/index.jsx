import React, { Fragment, useState } from 'react'
import { useLocation } from 'react-router-dom';

import { subscribe } from 'pubsub-js';


import EmptyStatus from '../../components/EmptyStatus'
import SgTodoItem from '../../components/SgTodoItem'
import { fetchData } from '../../utils/handleData';

export default function ImportantView() {
    const { pathname } = useLocation();
    const initData = fetchData(pathname.slice(1));
    const [importantList, setImportantList] = useState(initData);

    subscribe('important', function (pubkey, data) {
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
                        <SgTodoItem pathname={pathname.slice(1)} key={item.id} {...item} />
                    )
                })
            }
        </Fragment>
    )
}
