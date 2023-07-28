import { createBrowserRouter } from "react-router-dom";
import Home from "../../../layouts/pages/Home/Home";
import Users from "../../../layouts/pages/Users/Users";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Home></Home>
        
    },
    {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('http://localhost:5000/users')
    }
])

export default router;