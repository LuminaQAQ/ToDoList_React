import React, { Fragment, useState } from 'react'

import { subscribe } from "pubsub-js"

import SgTodoItem from "../../components/SgTodoItem"

// 获取"我的一天"数据
import { fetchTodayData, setTodayData } from '../../api/api'
import EmptyStatus from '../../components/EmptyStatus';


export default function TodayView() {
    const initData = fetchTodayData('todayListData') || [];
    const [todayList, setTodayList] = useState(initData);

    subscribe('todayListData', function (pubkey, val) {
        // 实际的数据
        setTodayData(val);

        // 页面的动态数据
        setTodayList(val);
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
                        <SgTodoItem key={item.id} {...item} />
                    )
                })
            }
        </Fragment>
    )
}
