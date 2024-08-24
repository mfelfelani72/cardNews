import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/logo.png"



export function Header(...props) {

    let link = props.activeLink;

    let activeClass = "md:text-blue-700 block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500";

    let nonActiveClass = "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";



    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 mx-2">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="card News" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AimoonHUB</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/" className={link == "home" ? activeClass : nonActiveClass}>Home</Link>
                        </li>
                        <li>
                            <Link to="/news" className={link == "news" ? activeClass : nonActiveClass}>News</Link>
                        </li>
                        <li>
                            <a href="#" className={link == "services" ? activeClass : nonActiveClass}>Services</a>
                        </li>
                        <li>
                            <a href="#" className={link == "pricing" ? activeClass : nonActiveClass}>Pricing</a>
                        </li>
                        <li>
                            <a href="#" className={link == "contact" ? activeClass : nonActiveClass}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}