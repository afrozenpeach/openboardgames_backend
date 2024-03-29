import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root, { loader as rootLoader, action as rootAction } from "./routes/root";
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './error';
import Game, { loader as contactLoader, action as contactAction } from './routes/games';
import EditContact, { action as editAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            errorElement: <ErrorPage />,
            children: [
              { index: true, element: <Index /> },
              {
                path: "game/:contactId",
                element: <Game />,
                loader: contactLoader,
                action: contactAction,
              },
              {
                path: "game/:contactId/edit",
                element: <EditContact />,
                loader: contactLoader,
                action: editAction
              },
              {
                path: "game/:contactId/destroy",
                action: destroyAction,
              },
            ]
          }
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
