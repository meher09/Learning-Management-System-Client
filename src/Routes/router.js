import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Authentication/Login'
import Register from '../Pages/Authentication/Register'
import MileStonesPage from '../Pages/MileStone/MileStonesPage'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/milestones',
                element: <MileStonesPage></MileStonesPage>
            },

        ]
    }
])

export default router