import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Quiz_1 from "./pages/Quiz_1";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Quiz_2 from "./pages/Quiz_2";
import Quiz_4 from "./pages/Quiz_4";
import Quiz_3 from "./pages/Quiz_3";
import Quiz_5 from "./pages/Quiz_5";
import Quiz_0 from "./pages/Quiz_0";
import Finnish from "./pages/Finnish";
import Quiz_7 from "./pages/Quiz_7";
import Quiz_6 from "./pages/Quiz_6";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/elso",
    element: <Quiz_0 />,
  },
  {
    path: "/masodik",
    element: <Quiz_1 />,
  },
  {
    path: "/breko",
    element: <Quiz_2 />,
  },
  {
    path: "/ajaj",
    element: <Quiz_3 />,
  },
  {
    path: "/sokadik",
    element: <Quiz_4 />,
  },
  {
    path: "/tyuu",
    element: <Quiz_5 />,
  },
  {
    path: "/segitek_8",
    element: <Quiz_6 />,
  },
  {
    path: "/remelem_1",
    element: <Quiz_7 />,
  },
  {
    path: "/vege",
    element: <Finnish />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
