import React, { useState, useEffect } from "react";

import Loading from "../../../features/core/Loading.js";


// This will be our Task
class Task {
    constructor({ name, action }) {
        // This will be a closure function that will be executed
        this.action = action;
    }
}



const App = () => {
    
    const tasks = [
        new Task({
            action: () => new Promise(resolve => setTimeout(resolve, 2000))
        }),
      
    ];
    return (
        <div className="h-screen w-screen flex items-center justify-center px-16 bg-white dark:bg-slate-500">
            <Loading tasks={tasks} />
        </div>
    );
}

export default App;