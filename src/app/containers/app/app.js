import React, { useState, useEffect } from "react";

import Loading from "../../../features/core/Loading.js";
import useAppStore from "../../../../utils/stores/AppStore.js";


// This will be our Task
class Task {
    constructor({ action }) {
        // This will be a closure function that will be executed
        this.action = action;
    }
}



const App = () => {

    const { loading, setLoading } = useAppStore((state) => ({
        loading: state.loading,
        setLoading: state.setLoading,
    }))

    const tasks = [
        new Task({
            action: () => new Promise(resolve => setTimeout(resolve, 2000)),
        }),
        new Task({
            action: () => new Promise(resolve => setTimeout(resolve, 3000)),
        }),

    ];
    return (
        <div className="h-screen w-screen flex items-center justify-center px-16 bg-white dark:bg-slate-500">
            {loading ? <Loading tasks={tasks} /> : <>sdsadas</>}
        </div>
    );
}

export default App;