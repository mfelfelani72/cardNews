import React, { useState, useEffect } from "react";

import ProgressBar from "../../features/core/components/ProgressBar.jsx"

export default function Loading({ tasks }) {


    const [progression, setProgression] = useState(0);
    
    useEffect(() => {

        (async () => {

            for (let i = 0; i < tasks.length; i++) {
                await tasks[i].action();
                setProgression(i + 1);
            }
        })();
    }, []);


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
