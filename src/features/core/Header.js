import React from "react";
import { Link } from 'react-router-dom';

import { IoMenu, IoMoon, IoSunny } from "react-icons/io5";
import { Dropdown } from "flowbite-react";
import useAppStore from "../../../utils/stores/AppStore.js";


export function Header(...props) {

    const { statusSidebar, setStatusSidebar, progressBar } = useAppStore((state) => ({
        statusSidebar: state.statusSidebar,
        setStatusSidebar: state.setStatusSidebar,
        progressBar: state.progressBar,
    }))

    return (
        <>
            <div className="fixed top-0 left-0 right-0 shadow-md dark:shadow-slate-500 z-10">
                <header className="p-2 bg-gradient-to-b from-gray-600 to-black w-full">
                    <div className="flex flex-row">

                        {/* menu icon */}
                        <div className="hover:cursor-pointer md:hidden text-DT-bright hover:text-color-theme dark:hover:text-D-color-theme font-semibold text-2xl
                         mr-3 pt-1"
                            onClick={() => {
                                statusSidebar === "block" ? setStatusSidebar("hidden") : setStatusSidebar("flex")

                            }}
                        >
                            <IoMenu />
                        </div>
                        {/* menu icon */}

                        <h2 className="basis-1/3 hidden md:ml-[12rem] xs:block text-DT-bright  font-semibold text-2xl">AimoonHUB</h2>

                        <div className="basis-2/3 flex flex-row-reverse text-sm leading-6 font-semibold text-DT-bright ">

                            <div className="hover:text-color-theme dark:hover:text-D-color-theme mx-4 my-auto">
                                <Dropdown label="Language" inline>
                                    <Dropdown.Item className="hover:bg-color-theme-light dark:hover:bg-D-color-theme-light hover:text-color-theme dark:hover:text-D-color-theme">EN</Dropdown.Item>
                                    <Dropdown.Item className="hover:bg-color-theme-light dark:hover:bg-D-color-theme-light hover:text-color-theme dark:hover:text-D-color-theme" >FA</Dropdown.Item>
                                </Dropdown>
                            </div>
                            <div className="flex items-center border-l border-slate-200 ml-6 pl-6 hover:cursor-pointer hover:text-color-theme dark:hover:text-D-color-theme" onClick={() => {
                                document.documentElement.classList.toggle("dark");
                            }}>
                                <span className="hidden dark:block">
                                    <IoSunny />
                                </span>
                                <span className="block dark:hidden">
                                    <IoMoon />
                                </span>
                            </div>

                            <ul className="flex items-center space-x-8">
                                <li>
                                    <a className="text-DT-bright hover:text-color-theme dark:hover:text-D-color-theme" href="/login">
                                        Login
                                    </a>
                                </li>
                                <li>
                                    <a className="text-DT-bright hover:text-color-theme dark:hover:text-D-color-theme" href="/register">
                                        Register
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </header >

                <div className="md:mx-[12rem] w-full bg-B-bright dark:bg-DB-V-bright z-10">
                    <div className="flex flex-row">
                        <div className="hidden sm:block bg-color-theme dark:bg-D-color-theme text-DT-bright text-center m-1 rounded-sm" >
                            <span className="p-2 px-3">News</span>
                        </div>
                        <div className="mt-1 w-full">
                            <marquee>
                                <a href="#" className="mx-4 hover:text-color-theme dark:hover:text-D-color-theme">Lorem ipsum odor amet, consectetuer adipiscing elit</a>
                                <a href="#" className="mx-4 hover:text-color-theme dark:hover:text-D-color-theme">Dictumst ullamcorper habitant porta consectetur orci sodales odio.</a>
                                <a href="#" className="mx-4 hover:text-color-theme dark:hover:text-D-color-theme">Vehicula ornare odio maecenas curae ex pretium.</a>
                                <a href="#" className="mx-4 hover:text-color-theme dark:hover:text-D-color-theme">Sociosqu donec in mollis euismod auctor venenatis nam auctor.</a>
                            </marquee>
                        </div>

                    </div>
                </div >

                {/* progress bar */}
                <div className="bg-slate-50">
                    <div className="md:mx-[12rem] h-1 w-[98%] xs:w-[99%] sm:w-[74%] md:w-[77%] bi:w-[78%] lg:w-[79%] xl:w-[83%]  z-10">
                        <div className="h-1 bg-color-theme dark:bg-D-color-theme rounded-r-xl " style={{ width: progressBar }}></div>
                    </div>
                </div>
                {/* progress bar */}
            </div >
        </>
    );
}