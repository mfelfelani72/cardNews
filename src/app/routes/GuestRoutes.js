import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Demo } from "../containers/demo/home.demo";


const Home = () => {
    return (
        <React.Fragment>
            <div className="container-fluid h-full w-full mx-auto testi">
                <Demo />
            </div>
        </React.Fragment>
    );
};

const GuestRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/news" element={<News />}></Route>
        </Routes>

    )
}

export default GuestRoutes