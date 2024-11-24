import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

const Login = lazy(() => import("./Pages/Login.jsx"));
const Home = lazy(() => import("./Pages/Home.jsx"));
const About = lazy(() => import("./Pages/About.jsx"));
const Contacts = lazy(() => import("./Pages/Contacts.jsx"));

const loading = <div>Loading...</div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={loading}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={loading}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contacts",
        element: (
          <Suspense fallback={loading}>
            <Contacts />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={loading}>
            <Login />
          </Suspense>
        ),
      },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
