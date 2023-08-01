import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CollegeDetails from "../pages/CollegeDetails/CollegeDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "signup",
            element: <SignUp></SignUp>
        },
        {
          path: "college-details/:id",
          element: <CollegeDetails></CollegeDetails>,
          // loader: ({params}) => fetch(`https://college-server-kappa.vercel.app//college-details/${params.id}`)
        }
      ]
    },
  ]);