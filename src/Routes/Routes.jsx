import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import AllToys from "../Pages/AllToys/AllToys";
import PrivateRoutes from "./PrivateRoutes";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import Category from "../Pages/Home/Category";
import ErrorPage from "../Pages/Error/ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";
import SingleCategory from "../Pages/Home/SingleCategory";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/register',
            element: <Register></Register>,
        },
        {
            path: '/allToys',
            element: <PrivateRoutes><AllToys></AllToys></PrivateRoutes>,
            loader: () => fetch ("https://lego-toy-market-server-azammunna0221.vercel.app/clients")
        },
        {
            path: '/addToy',
            element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes> 
        },
        {
            path: '/myToys',
            element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes> ,
            loader: () => fetch("https://lego-toy-market-server-azammunna0221.vercel.app/clients")
        },
        {
            path: '/updateToy/:id',
            element: <UpdateToy /> ,
            loader: ({params}) => fetch(`https://lego-toy-market-server-azammunna0221.vercel.app/clients/${params.id}`)
        },
        {
            path: '/category',
            element: <Category></Category>,
            loader: fetch('https://lego-toy-market-server-azammunna0221.vercel.app/category')
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>,
        },
        {
            path: '/category/:id',
            element: <SingleCategory></SingleCategory>,
            loader: ({params}) => fetch(`https://lego-toy-market-server-azammunna0221.vercel.app/category/${params.id}`)
        }
      ]
    },
  ]);

export default router;