import React from "react";
import { Link } from 'react-router-dom';




export function Header(...props) {

    let link = props.activeLink;

    let activeClass = "md:text-blue-700 block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500";

    let nonActiveClass = "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";



    return (
        <header className="ml-[12rem] p-3 bg-black w-full border-b-4 border-brown">
            <h2 className="text-white font-semibold text-2xl scroll-smooth focus:scroll-auto">AimoonHUB</h2>
        </header>
    );
}