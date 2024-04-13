
import { Navigate } from 'react-router-dom'

// fixed
import TodayView from '../pages/Today'
import ImportantView from '../pages/Important'
import AllTaskView from '../pages/AllTask'
import FinishedView from '../pages/Finished'
import TaskView from '../pages/Task'

// setting
import SettingView from '../pages/Setting'

// user
import UserTaskView from '../pages/UserTask';

const myRoutes = [
    // 重定向
    {
        path: '/',
        meta: { title: 'ToDoList' },
        element: <Navigate to="/todat?title=我的一天&icon=today" />,
    },
    {
        path: '*',
        meta: { title: 'ToDoList' },
        element: <Navigate to="/today?title=我的一天&icon=today" />,
    },

    // 固定
    {
        path: '/today',
        meta: { title: '我的一天' },
        element: <TodayView />,
    },
    {
        path: '/important',
        meta: { title: '重要' },
        element: <ImportantView />,
    },
    {
        path: '/allTask',
        meta: { title: '所有' },
        element: <AllTaskView />,
    },
    {
        path: '/finished',
        meta: { title: '已完成' },
        element: <FinishedView />,
    },
    {
        path: '/taskList',
        meta: { title: '任务' },
        element: <TaskView />,
    },

    // 用户自定义
    {
        path: '/userTask',
        meta: { title: '自定义ToDo列表' },
        element: <UserTaskView />,
    },

    // 设置
    {
        path: '/setting',
        meta: { title: '设置' },
        element: <SettingView />,
    },
]

export default myRoutes;