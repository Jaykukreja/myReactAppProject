import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { title } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ProfileClass from "./components/ProfileClass";

const Applayout = () => {
  return (
    <>
      <Header></Header>
      {/* {{Outlet}} */}
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "",
    element: <Applayout/>,
    errorElement: <Error/>,
    children : [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about",
        element: <About />,
        children : [
          {
          path : "profile",
          element: <ProfileClass />
          }
        ]
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      }
    ],
    
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
