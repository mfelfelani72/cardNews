/*

  Wire up all the app

*/
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import useAppStore from "../../../../utils/stores/AppStore.js";

import "../../styles/app/app.css";

import GuestRoutes from "../../routes/GuestRoutes";
import { Sidebar } from "../../../features/core/Sidebar";

const App = () => {

    const { progressBar, setProgressBar } = useAppStore((state) => ({
        progressBar: state.progressBar,
        setProgressBar: state.setProgressBar,
    }))

    const updateScrollCompletion = () => {
        const currentProgress = window.scrollY;
        const scrolHeight = document.body.scrollHeight - window.innerHeight;

        if (scrolHeight) {
            setProgressBar(String(Number((currentProgress / scrolHeight).toFixed(2)) * 100) + '%');
        }
    }


    useEffect(() => {

        // initial dark mode
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
        // initial dark mode

        window.addEventListener('scroll', updateScrollCompletion);


    }, []);

    const location = useLocation();
    const { pathname } = location;


    const guestRoutes = ["/", "/news"];

    // const AdminRoutes = ["/dashboard"];

    if (guestRoutes.includes(pathname)) {

        return (
            <>
                <Sidebar />
                <div className="md:ml-[12rem] mt-20 p-8 bg-white dark:bg-dark">
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
