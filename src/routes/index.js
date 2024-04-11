
import { Navigate } from 'react-router-dom'

// fixed
import ImportantView from '../pages/Important'
import TodayView from '../pages/Today'
import TaskView from '../pages/Task'

// non-todo
import SettingView from '../pages/Setting'

// user
import UserTaskView from '../pages/UserTask';

const myRoutes = [
    {
        path: '/',
        element: <Navigate to="/important" />,
    },
    {
        path: '*',
        element: <Navigate to="/important" />,
    },

    {
        path: '/important',
        element: <ImportantView />,
    },
    {
        path: '/tasklist',
        element: <TaskView />,
    },
    {
        path: '/today',
        element: <TodayView />,
    },

    {
        path: '/userTask',
        element: <UserTaskView />,
    },

    {
        path: '/setting',
        element: <SettingView />,
    },
]

export default myRoutes;