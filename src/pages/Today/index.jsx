import React, { Fragment, useState } from 'react'
import { useLocation } from 'react-router-dom';

import { subscribe } from "pubsub-js"

import SgTodoItem from "../../components/SgTodoItem"

// 获取"我的一天"数据
import EmptyStatus from '../../components/EmptyStatus';

import { fetchData } from '../../utils/handleData';

export default function TodayView() {
    const { pathname } = useLocation();

    const initData = fetchData(pathname.slice(1));
    const [todayList, setTodayList] = useState(initData);

    subscribe('today', function (pubkey, data) {
        setTodayList(data);
    });



    if (initData.length === 0) {
        return (
            <EmptyStatus />
        )
    }

    return (
        <Fragment>
            {
                todayList.map(item => {
                    return (
                        <SgTodoItem pathname={pathname.slice(1)} key={item.id} {...item} />
                    )
                })
            }
        </Fragment>
    )
}
