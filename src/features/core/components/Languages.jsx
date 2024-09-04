import React from 'react'

import { Dropdown } from "flowbite-react";
import ReactCountryFlag from "react-country-flag";
import { IoLanguageSharp } from "react-icons/io5";

import useAppStore from "../../../../utils/stores/AppStore.js";

export default function Languages() {

    const languageList = [
        { id: 'fa', flag: "IR", dir: "rtl", name: "Iran" },
        { id: 'en', flag: "GB", dir: "ltr", name: "Engish" },
    ]

    const { setLanguageApp } = useAppStore((state) => ({
        setLanguageApp: state.setLanguageApp,
    }))


    return (
        <Dropdown label={<IoLanguageSharp className="text-xl" />} inline>

            {languageList?.map((row) => (

                <React.Fragment key={row.id}>

                    <Dropdown.Item onClick={() => setLanguageApp(row.id, row.dir)} className="hover:bg-color-theme-light dark:hover:bg-D-color-theme-light hover:text-color-theme dark:hover:text-D-color-theme">
                        <ReactCountryFlag countryCode={row.flag} /> <span className="px-1">{row.name}</span>
                    </Dropdown.Item>

                </React.Fragment>
            ))}

        </Dropdown>
    )
}
