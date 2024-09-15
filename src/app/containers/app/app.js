/*

  Wire up all the app

*/
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import useAppStore from "../../../../utils/stores/AppStore.js";
import i18n from "../../../../utils/services/i18n";

import "../../styles/app/app.css";

import GuestRoutes from "../../routes/GuestRoutes";
import { Header } from "../../../features/core/Header";
import { Sidebar } from "../../../features/core/Sidebar";
import Page404 from "../../../features/core/components/Page404.jsx"
import SplashScreen from "../../../features/core/SplashScreen.js";
import { Footer } from "../../../features/core/Footer.js";

// This will be our Task
class Task {
    constructor({ action }) {
        // This will be a closure function that will be executed
        this.action = action;
    }
}

const App = () => {

    // { load Global States from zustand
    const { splashScreen, setProgressBar } = useAppStore((state) => ({
        progressBar: state.progressBar,
        setProgressBar: state.setProgressBar,
        splashScreen: state.splashScreen,
    }))
    // load Global States from zustand }

    // { for calculate scroll page
    const updateScrollCompletion = () => {
        const currentProgress = window.scrollY;
        const scrolHeight = document.body.scrollHeight - window.innerHeight;

        if (scrolHeight) {
            setProgressBar(String(Number((currentProgress / scrolHeight).toFixed(2)) * 100) + '%');
        }
    }
    // for calculate scroll page }

    // { task for splashScreen
    const tasks = [
        new Task({
            action: () => new Promise(resolve => setTimeout(resolve, 2000)),
        }),
        new Task({
            action: () => new Promise(resolve => setTimeout(resolve, 3000)),
        }),

    ];
    // task for splashScreen }

    useEffect(() => {

        // { initial language

        const rootHtml = document.getElementById("root-html");

        if (rootHtml && localStorage.getItem("currentLngId") && localStorage.getItem("currentLngDir")) {

            i18n.changeLanguage(localStorage.getItem("currentLngId"));
            rootHtml.setAttribute("dir", localStorage.getItem("currentLngDir"));
        }

        // initial language }

        // { initial theme mode (dark or light)

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ||
            localStorage.getItem("theme") === 'dark') {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }

        // initial theme mode }

        // { call function to calculate scroll

        window.addEventListener('scroll', updateScrollCompletion);

        // call function to calculate scroll }


    }, []);

    // { define public or private routes (guest or admin)

    const location = useLocation();
    const { pathname } = location;

    const guestRoutes = ["/", "/news"];

    // const AdminRoutes = ["/dashboard"];

    // define public or private routes }

    // { guest routes

    if (guestRoutes.includes(pathname)) {

        return (
            <div className="font-main">
                {splashScreen
                    ?
                    // { first splashScreen app

                    <div className="h-screen w-screen flex items-center justify-center px-16 bg-B-V-bright dark:bg-DB-bright">
                        <SplashScreen tasks={tasks} />
                    </div>

                    // first splashScreen app }
                    :
                    // { load app for guest users

                    <>
                        <Header />

                        <Sidebar />

                        <div className="ltr:md:ml-[12rem] rtl:md:mr-[12rem] mt-20 bg-B-V-bright dark:bg-DB-dim h-screen">
                            <GuestRoutes />
                        </div>
                    </>

                    // load app for guest users }
                }
            </div>
        );
    }

    // guest routes }

    // { admin routes

    // else if (adminRoutes.includes(pathname)) {

    //     return (
    //         <AdminRoutes />
    //     );
    // }

    // admin routes }

    // { page 404
    else
        return (

            <Page404 />
        );
    // page 404 }

};

export default App;
