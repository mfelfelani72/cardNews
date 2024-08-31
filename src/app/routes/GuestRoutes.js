import React from 'react'
import { Routes, Route } from "react-router-dom";

import { AllNews } from "../../features/news/allNews"

const GuestRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<AllNews />}></Route>
            <Route path="/news" element={<AllNews />}></Route>
        </Routes>

    )
}

export default GuestRoutes