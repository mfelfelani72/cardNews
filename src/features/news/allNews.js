import React, { useEffect, useState } from "react";

import logo from "../../../assets/images/logo.png"

export function AllNews() {
    return (
        <>

            {/* <Header activeLink="news" /> */}

            {/* <div className="flex w-52 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div> */}

            {/* <Footer /> */}

            <div className="bg-white">
                <div>
                    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[18rem] lg:flex-col">
                        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r-[1px] border-gray-200 bg-white px-6 pb-4">
                            <div className="flex h-20 shrink-0 items-center">
                                <img alt="Your Company" src={logo} class="h-12 w-auto"></img>
                                <span className="m-4 mt-6 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AimoonHUB</span>
                            </div>
                            <div className="flex"></div>
                        </div>
                    </div>
                    <div className="lg:p-[18rem]"></div>
                </div>
            </div>

        </>
    );
}
