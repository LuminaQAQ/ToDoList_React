
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
        element: <Navigate to="/important" />,
    },
    {
        path: '*',
        element: <Navigate to="/important" />,
    },

    // 固定
    {
        path: '/today',
        element: <TodayView />,
    },
    {
        path: '/important',
        element: <ImportantView />,
    },
    {
        path: '/all',
        element: <AllTaskView />,
    },
    {
        path: '/finished',
        element: <FinishedView />,
    },
    {
        path: '/tasklist',
        element: <TaskView />,
    },

    // 用户自定义
    {
        path: '/userTask',
        element: <UserTaskView />,
    },

    // 设置
    {
        path: '/setting',
        element: <SettingView />,
    },
]

export default myRoutes;