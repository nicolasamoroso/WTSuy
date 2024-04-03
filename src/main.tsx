import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "@/components/nav/navbar.tsx";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ThanksScreen from "@/components/thanks-screen/thanks-screen.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <App />
      </>
    ),
  },
  {
    path: "/thanks",
    element: <ThanksScreen />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
