import React, { useState, useEffect } from "react";

import ProgressBar from "../../features/core/components/ProgressBar.jsx"
import useAppStore from "../../../utils/stores/AppStore.js";

import logo from "../../../assets/images/logo.png";

export default function SplashScreen({ tasks }) {


    const [progression, setProgression] = useState(0);
    const { setLoading } = useAppStore((state) => ({
        setLoading: state.setLoading,
    }))

    useEffect(() => {

        (async () => {

            // for (let i = progression; i < tasks.length; i++) {
            for (let i = 0; i < tasks.length; i++) {
                await tasks[i].action();
                setProgression(i + 2);
            }
            setTimeout(setLoading(false), 10000);
        })();
    }, [progression]);


    return (
        <div className={`px-4 py-3 rounded fixed my-12 mx-6 flex flex-col w-[20rem]`}>
            <div className="items-center">
                <div className='flex flex-col w-full'>

                    <div className='pb-6'><img alt="AimoonHUB" src={logo} className="h-[3.8rem] w-auto mx-auto"></img></div>
                    <ProgressBar percentage={(progression / tasks.length) * 100} />

                </div>
            </div>
        </div >
    );
}
