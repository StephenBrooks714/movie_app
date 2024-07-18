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
import About from "./About.jsx";
import Media from "./OurApp.jsx";
import MovieBlogs from "./MovieBlogs.jsx";
import { AuthProvider } from '@descope/react-sdk';
import Login from "./components/LoginForm.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/apps",
        element: <Media/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/blogs",
        element: <MovieBlogs/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <About/>,
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
