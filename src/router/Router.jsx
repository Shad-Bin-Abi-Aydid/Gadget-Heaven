import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../Pages/Home";
import GadgetsCard from "../components/GadgetsCard";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
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
                    },
                    {
                        path:'/category',
                        element:<GadgetsCard></GadgetsCard>,
                        loader:()=>fetch('../gadgets.json')
                    }
                ]
            }
        ]
    }

])

export default routes;