
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
            element:<AlllBoooks></AlllBoooks>
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
            element: <Books></Books>
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
  ]);