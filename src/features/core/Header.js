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

    let link = props.activeLink;

    let activeclassName = "md:text-blue-700 block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500";

    let nonActiveclassName = "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

    const { statusSidebar, setStatusSidebar } = useAppStore((state) => ({
        statusSidebar: state.statusSidebar,
        setStatusSidebar: state.setStatusSidebar,
    }))

    return (
        <>
            <div className="fixed top-0 left-0 right-0 shadow-md z-10">
                <header className="p-3 bg-black w-full border-b-4 border-brown">
                    <div className="flex flex-row">

                        {/* menu icon */}
                        <div className="hover:cursor-pointer md:hidden text-white dark:text-slate-500 hover:text-brown te font-semibold text-2xl mr-3 pt-1"
                            onClick={() => {
                                statusSidebar === "block" ? setStatusSidebar("hidden") : setStatusSidebar("flex")

                            }}
                        >
                            <IoMenu />
                        </div>
                        {/* menu icon */}

                        <h2 className="basis-1/3 md:ml-[12rem] hidden xs:block text-white dark:text-slate-500 font-semibold text-2xl">AimoonHUB</h2>

                        <div className="basis-2/3 flex flex-row-reverse text-sm leading-6 font-semibold text-white">

                            <div className="flex items-center border-l border-slate-200 ml-6 pl-6">
                                <span className="hidden dark:block">
                                    <IoSunny />
                                </span>
                                <span className="block dark:hidden">
                                    <IoMoon />
                                </span>
                            </div>

                            <ul className="flex items-center space-x-8">
                                <li>
                                    <a className="dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-400" href="/docs/installation">
                                        Login
                                    </a>
                                </li>
                                <li>
                                    <a href="https://tailwindui.com/?ref=top" className="dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-400">
                                        Register
                                    </a>
                                </li>
                            </ul>
                            


                        </div>
                    </div>
                </header >
                <div className="md:mx-[12rem] w-full bg-slate-100 z-10">
                    <div className="flex flex-row">
                        <div className="bg-brown text-white text-center px-4 rounded-br-2xl font-semibold" >
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
                                <div className="p-1 hover:text-brown">
                                    <a href="/news##">Can coffee make you a better developer?</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={1}>
                                <div className="p-1 hover:text-brown">
                                    <a href="/news##">Can coffee make you a better developer?</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={1}>
                                <div className="p-1 hover:text-brown">
                                    <a href="/news##">Can coffee make you a better developer?</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={1}>
                                <div className="p-1 hover:text-brown">
                                    <a href="/news##">Can coffee make you a better developer?</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={1}>
                                <div className="p-1 hover:text-brown">
                                    <a href="/news##">Can coffee make you a better developer?</a>
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </div>
                </div >
            </div >
        </>
    );
}