import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import useAppStore from "../../app/stores/AppStore.js";

import { IoIosClose } from "react-icons/io";
import { cn } from "../../../utils/lib/cn.js"
import { useTranslation } from "react-i18next";
import { stringHelper } from "../../../utils/helpers/stringHelper.js";
import { Footer } from "./Footer.js";

export function Sidebar() {

    const { t } = useTranslation();

    const { sidebarLink, statusSidebar, setStatusSidebar } = useAppStore((state) => ({
        sidebarLink: state.sidebarLink,
        statusSidebar: state.statusSidebar,
        setStatusSidebar: state.setStatusSidebar,
    }))

    let activeClass = "hover:bg-color-theme-light hover:dark:bg-D-color-theme-light text-color-theme dark:text-D-color-theme bik blj bqi flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6";
    let nonActiveClass = "hover:bg-color-theme-light hover:dark:bg-D-color-theme-light text-T-bright dark:text-DT-bright hover:text-color-theme hover:dark:text-D-color-theme  bik blj bqi flex gap-x-3 rounded-md p-2 text-sm  font-semibold leading-6";

    return (
        <div className={cn("fixed inset-y-0 z-50 w-[12rem] flex-col shadow-lg dark:shadow-sh-dark hidden md:flex bg-B-V-bright dark:bg-DB-bright", statusSidebar)}>

            {/* menu icon */}
            <div className="flex flex-row-reverse border-r-[1px]">
                <div className="hover:cursor-pointer md:hidden text-T-bright dark:text-DT-bright  hover:text-color-theme hover:dark:text-D-color-theme font-semibold text-2xl m-2
                border-2 rounded-md border-color-theme dark:border-D-color-theme"
                    onClick={() => {
                        statusSidebar === "flex" ? setStatusSidebar("hidden") : setStatusSidebar("flex")
                    }}
                >
                    <IoIosClose />
                </div>
            </div>
            {/* menu icon */}

            <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r-[1px] -color-themeborder-light dark:border-D-color-theme-light px-6 pb-4">

                <div className="flex flex-col h-20 shrink-0 items-end md:mt-4">
                    <img alt="Your Company" src={logo} className="h-[3.8rem] w-auto mx-auto"></img>
                </div>

                <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-6 my-3 md:my-0">
                        <li className=" border-b-2 pb-3 border-color-theme-light dark:border-D-color-theme-light ">
                            <ul role="list" className="-mx-2 abv">
                                <li className="">
                                    <a href="#" className={sidebarLink == "llmNews" ? activeClass : nonActiveClass}>
                                        <span className="border-color-theme dark:border-D-color-theme text-color-theme dark:text-D-color-theme bql bru flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 font-medium text-[0.875rem]">
                                            {stringHelper(t('llm'), 1, 0, 'letter')}
                                        </span>
                                        <span className="ads">{t('llm')}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={sidebarLink == "topNews" ? activeClass : nonActiveClass}>
                                        <span className="border-color-theme dark:border-D-color-theme text-color-theme dark:text-D-color-theme bql bru flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 font-medium text-[0.875rem]">
                                            {stringHelper(t('top'), 1, 0, 'letter')}
                                        </span>
                                        <span className="ads">{t('top')}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={sidebarLink == "news" ? activeClass : nonActiveClass}>
                                        <span className="border-color-theme dark:border-D-color-theme text-color-theme dark:text-D-color-theme bql bru flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 font-medium text-[0.875rem]">
                                            {stringHelper(t('news'), 1, 0, 'letter')}
                                        </span>
                                        <span className="ads">{t('news')}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={sidebarLink == "coins" ? activeClass : nonActiveClass}>
                                        <span className="border-color-theme dark:border-D-color-theme text-color-theme dark:text-D-color-theme bql bru flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 font-medium text-[0.875rem]">
                                            {stringHelper(t('coins'), 1, 0, 'letter')}
                                        </span>
                                        <span className="ads">{t('coins')}</span>
                                    </a>
                                    <a href="#" className={nonActiveClass}>
                                        <span className="border-color-theme dark:border-D-color-theme text-color-theme dark:text-D-color-theme bql bru flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 font-medium text-[0.875rem]">
                                            {stringHelper(t('search'), 1, 0, 'letter')}
                                        </span>
                                        <span className="ads">{t('search')}</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        {/* end */}

                        <li className="">
                            <div className="text-xs text-center font-semibold leading-6 text-T-bright dark:text-DT-bright">
                                {t('whatLLI')}
                            </div>
                            <div className="text-center font-semibold leading-6 rounded-md hover:bg-color-theme-light hover:dark:bg-D-color-theme-light gap-x-3 text-sm text-color-theme dark:text-D-color-theme bik blj">
                                <a href="#" className="">{t('LLMAI')}</a>
                            </div>

                        </li>

                        {/* end */}
                        {/* social media */}
                        <li className="mt-auto">
                            <div className=" text-xs text-center font-semibold leading-6 text-T-bright dark:text-DT-bright">
                                {t('joinUsSochial')}
                            </div>
                            <div className="border-[1px] border-color-theme dark:border-D-color-theme rounded-lg bg-color-theme-light dark:bg-D-color-theme-light w-full h-18 p-1 text-color-theme dark:text-D-color-theme text-xs pt-1">

                                <a href="#" className=" text-color-theme dark:text-D-color-theme hover:text-color-theme hover:dark:text-D-color-theme bqi flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="text-color-theme dark:text-D-color-theme h-6 w-6 shrink-0 bi bi-telegram">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                                    </svg>

                                    {t('telegram')}
                                </a>

                            </div>

                        </li>
                        {/* social media */}

                    </ul>

                </nav>

            </div>
            <Footer />
        </div>
    );
}