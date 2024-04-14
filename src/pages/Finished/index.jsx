import React, { useState, Fragment } from 'react'
import { subscribe } from 'pubsub-js';

import EmptyStatus from '../../components/EmptyStatus';
import SgTodoItem from "../../components/SgTodoItem"
import { useLocation } from 'react-router-dom';
import { fetchData } from '../../utils/handleData';

export default function FinishedView() {
    const { pathname } = useLocation();
    const initData = fetchData(pathname.slice(1));
    const [finished, setFinished] = useState(initData);


    subscribe('finished', function (pubkey, data) {
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
                        <SgTodoItem pathname={pathname.slice(1)} key={item.id} {...item} />
                    )
                })
            }
        </Fragment>
    )
}
