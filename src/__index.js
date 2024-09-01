import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function ProgressBar({ percentage, startAt = 20 }) {
    return (
        <>
            <div className="h-2 w-full bg-gray-300 rounded-lg overflow-hidden">
                <div
                    style={{
                        width: `${percentage >= startAt ? percentage : startAt}%`
                    }}
                    className="h-full bg-blue-500 transition-all duration-1000"
                />
            </div>
        </>
    );
}

// This will be our Task
class Task {
    constructor({ name, action }) {
        // This is the name that will be displayed when we execute the task
        this.name = name;
        // This will be a closure function that will be executed
        this.action = action;
    }
}

// We are going to create one more component
// to keep our simple `ProgressBar` very general for other usage in our application
// This component will accept an array of tasks
function TasksProgressBar({ tasks }) {
    // Instead of passing the percentage directly,
    // We will base the percentage with the tasks that the component receives
    // const [percentage, setPercentage] = useState(0);

    // This state will be our indicator of how many tasks have been completed
    const [progression, setProgression] = useState(0);
    useEffect(() => {
        // We use a self executed callback to be able to use `await`
        // as `useEffect` can't use async callback itself
        (async () => {
            // We execute each task one by one
            for (let i = 0; i < tasks.length; i++) {
                await tasks[i].action();
                setProgression(i + 1);
            }
        })();
    }, []);

    // We calculate the percentage based on the number of tasks and the progression
    return (
        <div
            className={`bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded fixed bottom-0 right-0 my-12 mx-6 flex flex-col shadow-lg w-1/2`}
        >
            {/* We display the task name to indicate to the user what we are doing */}
            {progression < tasks.length && <p>{tasks[progression].name}</p>}
            {progression >= tasks.length && <p>All Done!</p>}

            <div className="h-2" />

            <div className="flex items-center">
                <span className="flex-shrink-0">
                    <span className="font-semibold">{progression}</span> / {tasks.length}
                </span>
                <div className="w-4" />
                <ProgressBar percentage={(progression / tasks.length) * 100} />
            </div>
        </div>
    );
}

function App() {
    // This will be our list of fake publishing tasks
    // The action is just waiting 2 seconds before finishing the promise
    // That simulate a API call like in the real world
    const tasks = [
        new Task({
            name: "Publishing to Dev.to...",
            action: () => new Promise(resolve => setTimeout(resolve, 2000))
        }),
        new Task({
            name: "Publishing to Medium...",
            action: () => new Promise(resolve => setTimeout(resolve, 2000))
        }),
        new Task({
            name: "Publishing to your personal blog...",
            action: () => new Promise(resolve => setTimeout(resolve, 2000))
        })
    ];
    return (
        <div className="h-screen w-screen flex items-center justify-center px-16">
            <TasksProgressBar tasks={tasks} />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
