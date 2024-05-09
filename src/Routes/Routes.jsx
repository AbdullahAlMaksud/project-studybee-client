import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../error/ErrorPage";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://b9a11-study-bee-server.vercel.app/services')
            },
        ]
    },
]);

export default router;