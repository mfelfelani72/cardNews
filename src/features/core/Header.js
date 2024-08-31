import React from "react";
import { Link } from 'react-router-dom';

import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';

import { IoMenu, IoMoon, IoSunny } from "react-icons/io5";
import useAppStore from "../../../utils/stores/AppStore.js";


export function Header(...props) {

    const { statusSidebar, setStatusSidebar } = useAppStore((state) => ({
        statusSidebar: state.statusSidebar,
        setStatusSidebar: state.setStatusSidebar,
    }))

    return (
        <>
            <div className="fixed top-0 left-0 right-0 shadow-md dark:shadow-slate-500  z-10">
                <header className="p-3 bg-black w-full border-b-4 border-brown">
                    <div className="flex flex-row">

                        {/* menu icon */}
                        <div className="hover:cursor-pointer md:hidden text-white hover:text-brown dark:text-slate-500 dark:hover:text-slate-200 font-semibold text-2xl
                         mr-3 pt-1"
                            onClick={() => {
                                statusSidebar === "block" ? setStatusSidebar("hidden") : setStatusSidebar("flex")

                            }}
                        >
                            <IoMenu />
                        </div>
                        {/* menu icon */}

                        <h2 className="basis-1/3 hidden md:ml-[12rem] xs:block text-white dark:text-slate-500 font-semibold text-2xl">AimoonHUB</h2>

                        <div className="basis-2/3 flex flex-row-reverse text-sm leading-6 font-semibold text-white">

                            <div className="flex items-center border-l border-slate-200 ml-6 pl-6 hover:cursor-pointer hover:text-brown dark:hover:text-slate-200" onClick={()=>{
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
                                    <a className="hover:text-brown dark:text-slate-500 dark:hover:text-slate-200" href="/login">
                                        Login
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-brown dark:text-slate-500 dark:hover:text-slate-200" href="/register">
                                        Register
                                    </a>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </header >

                <div className="md:mx-[12rem] w-full bg-slate-100 dark:bg-slate-200 z-10">
                    <div className="flex flex-row">
                        <div className="hidden sm:block bg-brown text-white text-center px-4 rounded-br-2xl font-semibold" >
                            <span className="p-1">breaking</span>
                            <span>news</span>
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
                                <div className="p-1 hover:text-brown text-black dark:text-slate-700">
                                    <a href="/news##">Can coffee make you a better developer? </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={1}>
                                <div className="p-1 hover:text-brown text-black dark:text-slate-700">
                                    <a href="/news##">Can coffee make you a better developer? </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={1}>
                                <div className="p-1 hover:text-brown text-black dark:text-slate-700">
                                    <a href="/news##">Can coffee make you a better developer? </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={1}>
                                <div className="p-1 hover:text-brown text-black dark:text-slate-700">
                                    <a href="/news##">Can coffee make you a better developer? </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={1}>
                                <div className="p-1 hover:text-brown text-black dark:text-slate-700">
                                    <a href="/news##">Can coffee make you a better developer? </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={1}>
                                <div className="p-1 hover:text-brown text-black dark:text-slate-700">
                                    <a href="/news##">Can coffee make you a better developer? </a>
                                </div>
                            </SwiperSlide>
                          
                            
                        </Swiper>

                    </div>
                </div >
            </div >
        </>
    );
}