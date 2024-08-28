/*

       Root file to create the Component tree

*/

import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "./app/containers/app/app";
import '../styles/style.css'
import { Header } from "./features/core/Header";
import { Footer } from "./features/core/Footer";


createRoot(document.getElementById('root')).render(

       <BrowserRouter>
              <Header />
              <App />
              <Footer />
       </BrowserRouter>
);
