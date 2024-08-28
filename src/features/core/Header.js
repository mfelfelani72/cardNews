import React from "react";
import { Link } from 'react-router-dom';




export function Header(...props) {

    let link = props.activeLink;

    let activeclassName = "md:text-blue-700 block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500";

    let nonActiveclassName = "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";



    return (
        <div className="fixed top-0 left-0 right-0">
            <header className="ml-[12rem] p-3 bg-black w-full border-b-4 border-brown">
                <div className="flex flex-row">
                    <h2 className="basis-1/3 text-white font-semibold text-2xl">AimoonHUB</h2>


                    <div className="basis-1/2 flex flex-row-reverse text-sm leading-6 font-semibold text-white">
                        <div className="flex items-center border-l border-slate-200 ml-6 pl-6">
                            <span className="dark:hidden">
                                <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6">
                                    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="stroke-white dark:stroke-slate-500">
                                    </path>
                                    <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-white dark:stroke-slate-500">
                                    </path>
                                </svg>
                            </span>
                        </div>
                        <ul className="flex items-center space-x-8">
                            <li>
                                <a className="hover:text-sky-500 dark:hover:text-sky-400" href="/docs/installation">
                                    Login
                                </a>
                            </li>
                            <li>
                                <a href="https://tailwindui.com/?ref=top" className="hover:text-sky-500 dark:hover:text-sky-400">
                                    Register
                                </a>
                            </li>

                        </ul>


                    </div>
                </div>




            </header >
        </div >
    );
}