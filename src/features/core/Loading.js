import React, { useState, useEffect } from "react";

import ProgressBar from "../../features/core/components/ProgressBar.jsx"
import useAppStore from "../../../utils/stores/AppStore.js";

export default function Loading({ tasks }) {


    const [progression, setProgression] = useState(0);
    const { loading, setLoading } = useAppStore((state) => ({
        loading: state.loading,
        setLoading: state.setLoading,
    }))

    useEffect(() => {

        (async () => {

            for (let i = 0; i < tasks.length; i++) {
                await tasks[i].action();
                setProgression(i + 2);
            }
            setTimeout(setLoading(false), 10000);
        })();
    }, [progression]);


    return (
        <div
            className={`px-4 py-3 rounded fixed my-12 mx-6 flex flex-col w-1/4`}
        >
            <div className="flex items-center">
                <ProgressBar percentage={(progression / tasks.length) * 100} />
            </div>
        </div>
    );
}
