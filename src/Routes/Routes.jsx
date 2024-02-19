
import {createBrowserRouter} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../componenets/Home/Home/Home";
import AddBooks from "../componenets/AddBooks/AddBooks/AddBooks";
import AlllBoooks from "../componenets/AlllBooks/AllBooks/AlllBoooks";
import BorrowedBooks from "../componenets/BorrowdBooks/BorrowedBooks/BorrowedBooks";
import Login from "../componenets/Verify/Login/Login";
import Register from "../componenets/Verify/Register/Register";

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
            element: <AddBooks></AddBooks>
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