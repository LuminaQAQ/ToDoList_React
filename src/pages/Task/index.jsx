import React, { useState, Fragment } from 'react'
import { subscribe } from 'pubsub-js';

import { fetchTaskListData, setTaskListData } from '../../api/api';

import EmptyStatus from '../../components/EmptyStatus';
import SgTodoItem from "../../components/SgTodoItem"

export default function TaskListView() {
  const initData = fetchTaskListData('taskListListData') || [];
  const [taskList, setTaskList] = useState(initData);


  subscribe('taskListListData', function (pubkey, data) {
    setTaskListData(data);
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
            <SgTodoItem key={item.id} {...item} />
          )
        })
      }
    </Fragment>
  )
}
