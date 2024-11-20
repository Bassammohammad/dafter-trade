import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginSignupPage } from "./routes/LoginSignupPage";
import {Dashboard} from './routes/Dashboard';



// Define the router
const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/login', element: <LoginSignupPage /> },
    { path: '/signup', element: <LoginSignupPage /> },
    {path: '/dashboard', element: <Dashboard /> },
]);



// Render the application
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <RouterProvider
            router={router}

        />
    </React.StrictMode>
);
