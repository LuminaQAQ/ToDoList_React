import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import "./index.css"

import App from './App';












// ------- 测试 -------
// #region
import { setItem } from './utils/localStroge';
setItem('fixedToDoGroup', [
  {
    id: 1,
    icon: 'today',
    title: '我的一天',
    to: '/today?title=我的一天&icon=today',
    ownership: 'fixed',
  },
  {
    id: 2,
    to: '/important?title=重要&icon=important',
    icon: 'important',
    title: '重要',
    checked: true,
    ownership: 'fixed',
  },
  {
    id: 3,
    to: '/allTask?title=全部&icon=allTask',
    icon: 'allTask',
    title: '全部',
    ownership: 'fixed',
  },
  {
    id: 4,
    to: '/finished?title=已完成&icon=finished',
    icon: 'finished',
    title: '已完成',
    checked: true,
    ownership: 'fixed',
  },
  {
    id: 5,
    to: '/taskList?title=任务&icon=taskList',
    icon: 'taskList',
    title: '任务',
    checked: true,
    ownership: 'fixed',
  },
]);
setItem('toDoList', [
  {
    "id": "taxXYy31YjPPqSCLKycFU",
    "todo_id": 1,
    "date": "2024-4-14 18:37:6",
    "isFinished": false,
    "isImportant": true,
    "content": "all",
    "type": "taskList"
  },
  {
    "id": "X_FOB-_SMZvf6yfkzy6yh",
    "todo_id": 2, "date": "2024-4-14 18:37:12", "isFinished": false, "isImportant": false, "content": "task", "type": "taskList"
  },
  {
    "id": "jyE_MhwXwAvBGVOb_XYu5",
    "todo_id": 3,
    "date": "2024-4-14 18:37:18", "isFinished": true, "isImportant": false, "content": "today", "type": "today"
  },
  {
    "id": "kQjj9Eze4W0Odc0Utla_C",
    "todo_id": 4,
    "date": "2024-4-14 18:37:28",
    "isFinished": true, "isImportant": true, "content": "important", "type": "important"
  }]);
// #endregion
// ------- end -------












const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
