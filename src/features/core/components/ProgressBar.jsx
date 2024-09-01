import React from 'react'
import logo from "../../../../assets/images/logo.png";

export default function ProgressBar({ percentage, startAt = 1 }) {
    return (
        <div className='flex flex-col w-full'>

            <div className='pb-6'><img alt="Your Company" src={logo} className="h-[3.8rem] w-auto mx-auto"></img></div>
            <div className="h-2  bg-gray-300 rounded-lg overflow-hidden">

                <div
                    style={{
                        width: `${percentage >= startAt ? percentage : startAt}%`
                    }}
                    className="h-full bg-brown transition-all duration-1000"
                />
            </div>
        </div>
    );
}
