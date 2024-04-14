import React, { useState, Fragment } from 'react'
import { subscribe } from 'pubsub-js';

import EmptyStatus from '../../components/EmptyStatus';
import SgTodoItem from "../../components/SgTodoItem"
import { fetchData } from '../../utils/handleData';
import { useLocation } from 'react-router-dom';

export default function TaskListView() {
  const { pathname } = useLocation();

  const initData = fetchData(pathname.slice(1));
  const [taskList, setTaskList] = useState(initData);


  subscribe('taskList', function (pubkey, data) {
    setTaskList(data);
  });


  if (initData.length === 0) {
    return (
      <EmptyStatus />
    )
  }

  return (
    <Fragment>
      {
        taskList.map(item => {
          return (
            <SgTodoItem pathname={pathname.slice(1)} key={item.id} {...item} />
          )
        })
      }
    </Fragment>
  )
}
