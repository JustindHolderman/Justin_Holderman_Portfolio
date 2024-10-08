import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './css/index.css';
import './css/normalize.css';

import App from './App.jsx';
import Homepage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import ErrorHandle from './pages/Error.jsx';
import ResumePage from './pages/ResumePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorHandle />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path: 'contact',
                element: <ContactPage />
            },
            {
                path: 'portfolio',
                element: <PortfolioPage />
            },
            {
                path: 'resume',
                element: <ResumePage />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
