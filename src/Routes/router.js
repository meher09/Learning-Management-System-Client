import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import Course from '../Pages/Course/Course'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Authentication/Login'
import Register from '../Pages/Authentication/Register'
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
                element: <Course></Course>
            },

        ]
    }
])

export default router