
import { Navigate } from 'react-router-dom'

import ImportantView from '../pages/Important'
import SettingView from '../pages/Setting'

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
        path: '/setting',
        element: <SettingView />,
    },
]

export default myRoutes;