import React from 'react'

export default function ProgressBar({ percentage, startAt = 1 }) {
    return (
        <div className="h-2 bg-gray-300 dark:bg-right rounded-lg overflow-hidden">

            <div
                style={{
                    width: `${percentage >= startAt ? percentage : startAt}%`
                }}
                className="h-full bg-color-theme dark:bg-D-color-theme transition-all duration-1000"
            ></div>
        </div>
    );
}
