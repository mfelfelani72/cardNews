/*

  Wire up all the app

*/
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import useAppStore from "../../../../utils/stores/AppStore.js";

import "../../styles/app/app.css";

import GuestRoutes from "../../routes/GuestRoutes";
import { Header } from "../../../features/core/Header";
import { Footer } from "../../../features/core/Footer";
import { Sidebar } from "../../../features/core/Sidebar";
import Loading from "../../../features/core/Loading.js";

// This will be our Task
class Task {
    constructor({ action }) {
        // This will be a closure function that will be executed
        this.action = action;
    }
}

const App = () => {

    const { loading, setProgressBar } = useAppStore((state) => ({
        progressBar: state.progressBar,
        setProgressBar: state.setProgressBar,
        loading: state.loading,
    }))

    // for calculate scroll page
    const updateScrollCompletion = () => {
        const currentProgress = window.scrollY;
        const scrolHeight = document.body.scrollHeight - window.innerHeight;

        if (scrolHeight) {
            setProgressBar(String(Number((currentProgress / scrolHeight).toFixed(2)) * 100) + '%');
        }
    }
    // for calculate scroll page

    // task for loading
    const tasks = [
        new Task({
            action: () => new Promise(resolve => setTimeout(resolve, 2000)),
        }),
        new Task({
            action: () => new Promise(resolve => setTimeout(resolve, 3000)),
        }),

    ];
    // task for loading

    useEffect(() => {

        // initial dark mode
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
        // initial dark mode

        // call function to calculate scroll
        window.addEventListener('scroll', updateScrollCompletion);
        // call function to calculate scroll


    }, []);

    const location = useLocation();
    const { pathname } = location;


    const guestRoutes = ["/", "/news"];

    // const AdminRoutes = ["/dashboard"];

    if (guestRoutes.includes(pathname)) {

        return (
            <>
                {loading
                    ?
                    <div className="h-screen w-screen flex items-center justify-center px-16 bg-B-V-bright dark:bg-DB-bright">
                        <Loading tasks={tasks} />
                    </div>
                    :
                    <>
                        <Header />

                        <Sidebar />
                        <div className="md:ml-[12rem] mt-20 p-8 bg-B-V-bright dark:bg-DB-dim">
                            <GuestRoutes />
                        </div>

                        <Footer />
                    </>
                }


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
