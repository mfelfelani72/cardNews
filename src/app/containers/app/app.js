/*

  Wire up all the app

*/
// import React, { useState, useEffect, lazy } from "react";
import React from "react";
import { useLocation } from "react-router-dom";
// import { cn } from "../../../../utils/lib/cn";
import "../../styles/app/app.css";

import GuestRoutes from "../../routes/GuestRoutes";

const App = () => {

    const location = useLocation();
    const { pathname } = location;


    const guestRoutes = ["/", "/news"];

    // const AdminRoutes = ["/dashboard"];

    if (guestRoutes.includes(pathname)) {

        return (
            <GuestRoutes />
        );
    }
    // else if (adminRoutes.includes(pathname)) {

    //     return (
    //         <AdminRoutes />
    //     );
    // }

    else
        return (
            <h6>page 404</h6>
        );


};

export default App;
