import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";

import { AllNews } from "../../features/news/allNews"

const GuestRoutes = () => {

    useEffect(() => {

        // initial dark mode

        if (localStorage.getItem("theme") == 'dark')
            document.documentElement.classList.add("dark");

        // initial dark mode

    }, [])


    return (

        <Routes>
            <Route path="/" element={<AllNews />}></Route>
            <Route path="/news" element={<AllNews />}></Route>
        </Routes>

    )
}

export default GuestRoutes