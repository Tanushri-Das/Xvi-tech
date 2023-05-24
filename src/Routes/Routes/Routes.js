import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";

import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },

        ]
    }
])
export default routes;