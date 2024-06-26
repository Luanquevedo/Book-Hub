import React from 'react'
import './index.scss'
import ReactDOM from 'react-dom/client'
import Home from './views/home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
