import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/main.scss";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import Dashboard from "./Dashboard.jsx";
import ErrorPage from "./error-page.jsx";
import Movies from "./components/Movies.jsx";
import { AuthProvider } from '@descope/react-sdk';
import Login from "./components/LoginForm.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/movies/id",
        element: <Movies/>,
        errorElement: <ErrorPage />,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider
        projectId='P2hwIdyL38KIgwdClKN9PiPfzF9g'
    >
        <RouterProvider router={router} />
    </AuthProvider>
);
