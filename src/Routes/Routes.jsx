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

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
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
            element: <PrivateRoutes><AllToys></AllToys></PrivateRoutes>
        },
        {
            path: '/addToy',
            element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes> 
        },
        {
            path: '/myToys',
            element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes> ,
            loader: () => fetch("http://localhost:3000/clients")
        },
        {
            path: '/updateToy/:id',
            element: <UpdateToy /> ,
            loader: ({params}) => fetch(`http://localhost:3000/clients/${params.id}`)
        },
        {
            path: '/category',
            element: <Category></Category>,
            loader: fetch('http://localhost:3000/category')
        }
      ]
    },
  ]);

export default router;