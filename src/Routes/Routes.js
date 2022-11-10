import { createBrowserRouter } from "react-router-dom";
import AddUser from "../components/AddUser/AddUser";
import Details from "../components/Details/Details";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
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
                loader: ({params}) => fetch(`http://localhost:5000/allServices/${params.id}`)
            },
            {
                path: '/adduser',
                element: <PrivateRoute><AddUser></AddUser></PrivateRoute>
            }
        ]
    }
])

export default router;