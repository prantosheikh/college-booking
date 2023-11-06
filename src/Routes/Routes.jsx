import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import College from "../pages/College/College";
import CollegeDetails from "../pages/CollegeDetails/CollegeDetails";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "college-details/:id",
        element: <CollegeDetails />,
        // loader: ({params}) => fetch(`https://college-server-kappa.vercel.app/college-details/${params.id}`)
      },
      {
        path: "/college",
        element: <College />,
      },
    ],
  },
]);
