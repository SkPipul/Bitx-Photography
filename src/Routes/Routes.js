import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MyService from "../components/MyService/MyService";
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
            }
        ]
    }
])

export default router;