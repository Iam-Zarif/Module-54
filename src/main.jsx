import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';
import FriendDetail from './Components/FriendDetail/FriendDetail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "friend/:id",
        element: <FriendDetail></FriendDetail>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      },
      { path: "about", element: <About></About> },
      { path: "contact", element: <Contact></Contact> },
      {
        path: "friends",
        element: <Friends></Friends>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
