import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import ErrorPage from "./components/ErrorPage/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children :[
      {
        path:"/mealdb-react/",
        element:<Home></Home>
      },
      {
        path:"/sign-up",
        element:<SignUp></SignUp>
      }
    ]
  },
  {
    path:"*",
    element:<ErrorPage></ErrorPage>
  }
  ]);
 
 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
