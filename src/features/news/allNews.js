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
                    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[12rem] lg:flex-col">
                        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r-[1px] border-gray-200 bg-white px-6 pb-4">
                            <div className="flex h-20 shrink-0 items-center">
                                <img alt="Your Company" src={logo} class="h-[3.8rem] w-auto mx-auto"></img>

                            </div>
                            <nav className="flex flex-1 flex-col">
                                <ul role="list" className="flex flex-1 flex-col gap-y-6">
                                    <li className="border-b-2">
                                        <ul role="list" className="-mx-2 my-2 abv">
                                            <li>
                                                <a href="#" class="hover:bg-lightBrown text-gray-700 hover:text-brown bik blj bqi flex gap-x-3 rounded-md p-2 text-sm  font-semibold leading-6">
                                                    <span class="border-brown text-brown bql bru flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 bg-white font-medium text-[0.875rem]">L</span>
                                                    <span class="ads">LLM News</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="hover:bg-lightBrown text-gray-700 hover:text-brown bik blj bqi flex gap-x-3 rounded-md p-2 text-sm  font-semibold leading-6">
                                                    <span class="border-brown text-brown bql bru flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 bg-white font-medium text-[0.875rem]">T</span>
                                                    <span class="ads">Top News</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="hover:bg-lightBrown text-gray-700 hover:text-brown bik blj bqi flex gap-x-3 rounded-md p-2 text-sm  font-semibold leading-6">
                                                    <span class="border-brown text-brown bql bru flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 bg-white font-medium text-[0.875rem]">N</span>
                                                    <span class="ads">News</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="hover:bg-lightBrown text-gray-700 hover:text-brown bik blj bqi flex gap-x-3 rounded-md p-2 text-sm  font-semibold leading-6">
                                                    <span class="border-brown text-brown bql bru flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 bg-white font-medium text-[0.875rem]">C</span>
                                                    <span class="ads">Coins</span>
                                                </a>
                                                <a href="#" class="hover:bg-lightBrown text-gray-700 hover:text-brown bik blj bqi flex gap-x-3 rounded-md p-2 text-sm  font-semibold leading-6">
                                                    <span class="border-brown text-brown bql bru flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 bg-white font-medium text-[0.875rem]">S</span>
                                                    <span class="ads">Search</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    {/* end */}

                                    <li className="">
                                        <div class=" text-xs text-center font-semibold leading-6 text-gray-400">
                                            What is LLM AI ?

                                            {/* <a href="#" class="hover:bg-lightBrownbqi -mx-2 flex gap-x-3 rounded-md px-2 text-sm font-semibold leading-6 text-gray-700 hover:text-brown bik blj">LLM AI</a> */}
                                        </div>
                                        <div class="text-center font-semibold leading-6 rounded-md hover:bg-lightBrown gap-x-3 text-sm text-brown bik blj">
                                            <a href="#" class="">LLM AI</a>
                                        </div>

                                    </li>

                                    {/* end */}
                                    {/* social media */}
                                    <li className="mt-auto">
                                        <div class=" text-xs text-center font-semibold leading-6 text-gray-400">
                                            Join US on Social Media
                                        </div>
                                        <div className="border-[1px] border-brown rounded-lg bg-lightBrown w-full h-18 p-1 text-brown text-xs text-center pt-1">

                                            <a href="#" className=" text-brown hover:text-brown bqi flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16" className="text-brown h-6 w-6 shrink-0">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                                                </svg>

                                                Telegram
                                            </a>

                                        </div>
                                    </li>
                                    {/* social media */}

                                </ul>

                            </nav>
                        </div>
                    </div>

                    <div className="header w-full h-96 text-gray-50 mt-40">asdsad</div>
                    <div className="footer ml-[3rem]">
                        <div className="border-[1px] justify-center w-full h-16 pt-5">
                            <p class="text-sm/6 text-slate-600 max-md:text-center">
                                © 2024 <a href="#" className="text-brown">AimoonHUB</a> Labs Inc. All rights reserved.
                            </p>
                        </div>
                    </div>


                </div>
            </div>

        </>
    );
}



