import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/GlobalStyle.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './pages/login/index.jsx';
import { Dashboard } from './pages/dashboard/index.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/login",
    element:  <Login/>,
  },
  {
    path: "/dash",
    element:  <Dashboard/>,
  },
  
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={router} />
  </React.StrictMode>,
)
