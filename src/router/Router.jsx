import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../Pages/Home";
import GadgetsCard from "../components/GadgetsCard";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import GadgetDetails from "../Pages/GadgetDetails";
import About from "../components/About";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:  [
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=>fetch('../category.json'),
                children:[
                    {
                        path:'/',
                        element:<GadgetsCard></GadgetsCard>,
                        loader:()=>fetch('../gadgets.json'),
                    },
                    {
                        path:'/category/:categoryId',
                        element:<GadgetsCard></GadgetsCard>,
                        loader:()=>fetch('../gadgets.json'),
                    }
                ]
            },
            {
                path:"/statistics",
                element:<Statistics></Statistics>
            },
            {
                path:"/dashboard",
                element:< Navigate to= "/dashboard/cart" replace />
            },
            {
                path:"/dashboard/:id",
                element:<Dashboard></Dashboard>
            },
            {
                path:"/gadget/:id",
                element:<GadgetDetails></GadgetDetails>,
                loader:()=>fetch('../gadgets.json')
            },
            {
                path:"/about",
                element:<About></About>
                
            }
        ]
    }

])

export default routes;