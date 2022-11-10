import { createBrowserRouter } from "react-router-dom";
import AddUser from "../components/AddUser/AddUser";
import Blog from "../components/Blog/Blog";
import Details from "../components/Details/Details";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MyReviews from "../components/MyReviews/MyReviews";
import MyService from "../components/MyService/MyService";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import SignUp from "../components/SignUp/SignUp";
import Main from "../Layout/Main";

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
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/myservice',
                element: <MyService></MyService>
            },
            {
                path: '/allServices/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch(`https://bitx-photography-server.vercel.app/allServices/${params.id}`)
            },
            {
                path: '/adduser',
                element: <PrivateRoute><AddUser></AddUser></PrivateRoute>
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
                loader: ({params}) => fetch(`https://bitx-photography-server.vercel.app/allReviews/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;