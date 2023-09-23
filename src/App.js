import React, { lazy, Suspense } from "react";
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
import Shimmer from "./components/Shimmer";
import Instamart from "./components/Instamart";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart"
//C:\Users\I524872\Desktop\React\namasteReact\src\components\Instamart.js

//const Instamart = lazy(() => import("./components/Instamart"));

const Applayout = () => {
  return (
    <Provider store={store}>
      <Header></Header>
      {/* {{Outlet}} */}
      <Outlet />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          // <Suspense fallback={<Shimmer></Shimmer>}>
          <Instamart></Instamart>
          /* </Suspense> */
        ),
      },
      {
        path: "/cart",
        element: (
          <Cart />
        ),
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
