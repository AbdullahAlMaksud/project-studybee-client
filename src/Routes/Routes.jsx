import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../error/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Registration from "../Pages/Authentication/Registration";
import AllServices from "../Pages/AllServices";
import AddService from "../Pages/AddService";
import Profile from "../Pages/Authentication/Profile";
import ServiceDetails from "../Pages/ServiceDetails";

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
                path: '/profile',
                element: <Profile/>
            },
            {
                path: '/services',
                element: <AllServices/>
            },
            {
                path: '/addServices',
                element: <AddService/>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails/>,
                loader: ({params})=>fetch(`${import.meta.env.VITE_SERVER}/services/${params.id}`)
            }
        ]
    },
]);

export default router;