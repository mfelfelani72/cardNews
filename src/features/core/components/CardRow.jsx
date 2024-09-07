import React from "react";
import { dateHelper } from "../../../../utils/helpers/dateHelper.js";
import { stringHelper } from "../../../../utils/helpers/stringHelper.js";

import logo from "../../../../assets/images/logo-shape.png";
import avatar from "../../../../assets/images/avatar.png";

import useNewsStore from "../../../../utils/stores/NewsStore.js"

const CardRow = (props) => {

    const { setViewNews } = useNewsStore((state) => ({
        setViewNews: state.setViewNews,
    }))

    return (
        <>
            <div className="bg-slate-50 dark:bg-DB-dim px-3 pt-1 border-b border-color-theme-light dark:border-D-color-theme-light pb-2">
                <div className="px-2 pt-2 cursor-pointer text-T-dim dark:text-DT-title hover:text-color-theme dark:hover:text-D-color-theme">
                    <a onClick={() => { setViewNews(props.row); document.getElementById('viewNews').scrollTop = 0; }}>{props.row.title}</a>
                </div>
                <div className="px-2 text-sm">{stringHelper(props.row.articleBody, 30)}</div>

                <div className="px-1 pt-2 text-sm font-semibold">
                    <span className="px-1 text-T-bright/60 dark:text-DT-bright/60"> {props.row.category}</span>
                    <span className="px-1 text-T-bright/80 dark:text-DT-bright/80">
                        <a className="cursor-pointer hover:text-color-theme dark:text-D-color-theme"
                            href={props.row.link} target="blank">
                            {props.row.provider}</a>
                    </span>
                </div>

                <div className="flex flex-row px-2 pt-4">
                    <span className=""><img src={avatar} className="h-10 w-10 rounded-lg" /></span>
                    <div className="flex flex-col">
                        <span className="px-3 text-sm font-bold"> {props.row.author}</span>
                        <span className="px-3 text-sm"> {dateHelper(props.row.pubDate)}</span>
                    </div>
                </div>
                {props.row?.summaryEn || props.row?.summaryFa ?
                    <div className="flex justify-end items-center px-1 font-bold text-[0.75rem]">
                        <span className="" >Analyzed by LLM AI</span>
                        <span className="px-1 pb-2" ><img src={logo} className="h-4 w-5" /></span>
                    </div>
                    : ""
                }
            </div>
        </>
    );
}

export default CardRow;