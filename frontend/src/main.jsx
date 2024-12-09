import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./app/store.js";

const Loading = lazy(() => import("./components/Loading/Loading.jsx"));
const Auth = lazy(() => import("./Pages/Auth.jsx"));
const Home = lazy(() => import("./Pages/Home.jsx"));
const About = lazy(() => import("./Pages/About.jsx"));
const Contacts = lazy(() => import("./Pages/Contacts.jsx"));
const ProductDetail = lazy(() => import("./Pages/ProductDetail.jsx"));
const Signup = lazy(() => import("./components/Auth/Signup.jsx"))
const Login = lazy(() => import("./components/Auth/Login.jsx"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contacts",
        element: (
          <Suspense fallback={<Loading />}>
            <Contacts />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Auth />
          </Suspense>
        ),
        children: [
          {
            path: "/login",
            element: (
              <Suspense fallback={<Loading />}>
                <Login />
              </Suspense>
            ),
          },
          {
            path: "/signup",
            element: (
              <Suspense fallback={<Loading />}>
                <Signup />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
