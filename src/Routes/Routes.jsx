import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../error/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Registration from "../Pages/Authentication/Registration";
import AllServices from "../Pages/AllServices";
import AddService from "../Pages/Authentication/AddService";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch(`${import.meta.env.VITE_SERVER}/services`)
            },
            {
                path: '/login',
                element:<Login/>
            },
            {
                path: '/registration',
                element: <Registration/>
            },
            {
                path: '/services',
                element: <AllServices/>
            },
            {
                path: '/addServices',
                element: <AddService/>
            }
        ]
    },
]);

export default router;