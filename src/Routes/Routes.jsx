
import {createBrowserRouter} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../componenets/Home/Home/Home";
import AddBooks from "../componenets/AddBooks/AddBooks/AddBooks";
import AlllBoooks from "../componenets/AlllBooks/AllBooks/AlllBoooks";
import BorrowedBooks from "../componenets/BorrowdBooks/BorrowedBooks/BorrowedBooks";
import Login from "../componenets/Verify/Login/Login";
import Register from "../componenets/Verify/Register/Register";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Search from "../componenets/AlllBooks/Search/Search";
import Books from "../componenets/AddBooks/Books/Books";
import MyCart from "../componenets/Dashboard/MyCart/MyCart";
import Dashboard from "../componenets/Dashboard/Dashboard/Dashboard";
import AdminHome from "../componenets/Dashboard/AdminHome/AdminHome";
import Allusers from "../componenets/Dashboard/Allusers/Allusers";

export   const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      // TODO : Error Element
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/addBooks",
            element: <PrivateRoutes><AddBooks></AddBooks></PrivateRoutes>
        },
        {
            path: "/allBooks",
            element:<PrivateRoutes><AlllBoooks></AlllBoooks></PrivateRoutes>
        },
        {
            path: "/borrowedBooks",
            element: <BorrowedBooks></BorrowedBooks>
        },
        {
           path:"/search",
           element: <Search></Search>
        },
          {
            path : "/books/:id",
            element:<PrivateRoutes> <Books></Books></PrivateRoutes>
          }
        ,
        {

            path: "/login",
            element : <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        }
      ]
    },
    {
      path: "/dashboard",
      element : <Dashboard></Dashboard>,
      children : [
        {
          path : "/dashboard/cart",
          element: <MyCart></MyCart>
        },
        // admin routes only 

        {
          path: "/dashboard/adminHome",
          element :<AdminHome></AdminHome>
        },
        {
          path : "/dashboard/addItems",
          element: <MyCart></MyCart>
        },
        {
          path: "/dashboard/contactInfo",
          element :<AdminHome></AdminHome>
        },
        {
          path : "/dashboard/userscart",
          element: <MyCart></MyCart>
        },
        {
          path: "/dashboard/paymentHistory",
          element :<AdminHome></AdminHome>
        }, 
        {
         path : "/dashboard/users",
         element : <Allusers></Allusers>
        }
      ]
    }
  ]);