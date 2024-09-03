import React from "react";
import { Link } from 'react-router-dom';

import { cn } from "../../../utils/lib/cn.js"

import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';

import { IoMenu, IoMoon, IoSunny } from "react-icons/io5";
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
                <header className="p-3 bg-gradient-to-b from-gray-600 to-black w-full">
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

                        <h2 className="basis-1/3 hidden md:ml-[12rem] xs:block text-DT-bright hover:text-color-theme dark:hover:text-D-color-theme font-semibold text-2xl">AimoonHUB</h2>

                        <div className="basis-2/3 flex flex-row-reverse text-sm leading-6 font-semibold text-DT-bright ">

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
                        <div className="hidden sm:block bg-color-theme dark:bg-D-color-theme text-DT-bright text-center p-2 rounded-br-md font-semibold" >
                            <span>breaking</span>
                            <span className="pl-1">news</span>
                        </div>
                        <Swiper
                            modules={[Autoplay, A11y]}
                            speed={9000}
                            spaceBetween={0} // Adjust the spacing as needed
                            slidesPerView={1} // Show only one slide by default
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}

                        >
                            <SwiperSlide key={1}>
                                <div className="p-1 pt-2 hover:text-color-theme dark:hover:text-D-color-theme">
                                    <a href="/news##">Can coffee make you a better developer? </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={1}>
                                <div className="p-1 pt-2 hover:text-color-theme dark:hover:text-D-color-theme">
                                    <a href="/news##">Can coffee make you a better developer? </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={1}>
                                <div className="p-1 pt-2 hover:text-color-theme dark:hover:text-D-color-theme">
                                    <a href="/news##">Can coffee make you a better developer? </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={1}>
                                <div className="p-1 pt-2 hover:text-color-theme dark:hover:text-D-color-theme">
                                    <a href="/news##">Can coffee make you a better developer? </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={1}>
                                <div className="p-1 pt-2 hover:text-color-theme dark:hover:text-D-color-theme">
                                    <a href="/news##">Can coffee make you a better developer? </a>
                                </div>
                            </SwiperSlide>
                         
                        
                        </Swiper>

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