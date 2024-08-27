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
                                {/* <span className="m-4 mt-6 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AimoonHUB</span> */}
                            </div>
                            <nav className="flex flex-1 flex-col">
                                <ul role="list" className="flex flex-1 flex-col gap-y-6">
                                    {/* first */}
                                    <li>
                                        <ul role="list" className="-mx-2 abv">
                                            <li>
                                                <a href="#" className="hover:bg-lightBrown text-brown hover:text-brown bqi flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="text-brown h-6 w-6 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path></svg>
                                                    Dashboard
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="hover:bg-lightBrown text-gray-700 hover:text-brown bik blj bqi flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="text-brown bru h-6 w-6 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
                                                </svg>
                                                    Team
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="hover:bg-lightBrown text-gray-700 hover:text-brown bik blj bqi flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="text-brown bru h-6 w-6 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path></svg>
                                                    Projects
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="hover:bg-lightBrown text-gray-700 hover:text-brown bik blj bqi flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="text-brown bru h-6 w-6 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path></svg>
                                                    Calendar
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="hover:bg-lightBrown text-gray-700 hover:text-brown bik blj bqi flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="text-brown bru h-6 w-6 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"></path></svg>
                                                    Documents
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="hover:bg-lightBrown text-gray-700 hover:text-brown bik blj bqi flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="text-brown bru h-6 w-6 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"></path></svg>
                                                    Reports
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* first */}
                                    <li>
                                        <div class="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                                        <ul role="list" className="-mx-2 mt-2 abv">
                                            <li>
                                                <a href="#" class="hover:bg-lightBrown text-gray-700 hover:text-brown bik blj bqi flex gap-x-3 rounded-md p-2 text-sm  font-semibold leading-6">
                                                    <span class="border-brown text-brown bql bru flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 bg-white font-medium text-[0.875rem]">H</span>
                                                    <span class="ads">Heroicons</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="hover:bg-lightBrown text-gray-700 hover:text-brown bik blj bqi flex gap-x-3 rounded-md p-2 text-sm  font-semibold leading-6">
                                                    <span class="border-brown text-brown bql bru flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 bg-white font-medium text-[0.875rem]">T</span>
                                                    <span class="ads">Tailwind Labs</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="hover:bg-lightBrown text-gray-700 hover:text-brown bik blj bqi flex gap-x-3 rounded-md p-2 text-sm  font-semibold leading-6">
                                                    <span class="border-brown text-brown bql bru flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 bg-white font-medium text-[0.875rem]">W</span>
                                                    <span class="ads">Workcation</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* setting */}
                                    <li className="mt-auto">
                                        <a href="#" class="hover:bg-lightBrown bqi -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:text-brown bik blj"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="text-brown bru h-6 w-6 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>Settings</a>
                                    </li>
                                    {/* setting */}
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="lg:p-[18rem]"></div>
                </div>
            </div>

        </>
    );
}
