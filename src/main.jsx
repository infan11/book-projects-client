import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthProvider from './componenets/Provider/AuthProvider/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

    
     <div className='bg-white min-h-screen'>
  
     <RouterProvider router={router}  /> 
     <ToastContainer/>
      </div>
      
    </AuthProvider>
  </React.StrictMode>,
)
