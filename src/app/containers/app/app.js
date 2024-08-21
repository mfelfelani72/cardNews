/*

  Wire up all the app

*/
import React, { useState, useEffect, lazy } from "react";
import { cn } from "../../../../utils/lib/cn";
import { Routes, Route } from "react-router-dom";
import "../../styles/app/app.css";
import { Demo } from "../demo/home.demo";

const Home = () => {
    return (
        <React.Fragment>
            <div className="container-fluid h-full w-full mx-auto testi">
                <Demo />
            </div>
        </React.Fragment>
    );
};

const App = () => {
    return (
        <div className="w-100 h-100">
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </div>
    );
};

export default App;
