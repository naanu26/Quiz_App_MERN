import React from "react";
import "../styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/** Importing Components */
import Main from "./Main";
import { Result } from "./Result";
import Quiz from "./Quiz";
import { AuthRoute } from "../helper/helper";

/** react routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/quiz",
    element: (
      <AuthRoute>
        <Quiz />
      </AuthRoute>
    ),
  },
  {
    path: "/result",
    element: (
      <AuthRoute>
        <Result />
      </AuthRoute>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
