/*

  Wire up all the app

*/

import React from "react";
import { useLocation } from "react-router-dom";

import "../../styles/app/app.css";

import GuestRoutes from "../../routes/GuestRoutes";
import { Sidebar } from "../../../features/core/Sidebar";

const App = () => {

    const location = useLocation();
    const { pathname } = location;


    const guestRoutes = ["/", "/news"];

    // const AdminRoutes = ["/dashboard"];

    if (guestRoutes.includes(pathname)) {

        return (
            <>
                <Sidebar />
                <div className="ml-[12rem] mt-16 p-8">
                    <GuestRoutes />
                </div>
                
            </>
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
