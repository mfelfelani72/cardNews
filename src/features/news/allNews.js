import React, { useEffect, useState } from "react";
import axios from "../../../utils/services/news/api";
import CardRow from "../core/components/CardRow.jsx";

import useAppStore from "../../../utils/stores/AppStore.js"

import Slider from "../core/components/Slider.jsx";

export function AllNews() {

    const [news, setNews] = useState(null);

    const headers = {
        'Authorization': '92223bf504efcfd0e6e000ba1f4d53f4'
    }
    const data = {
        'symbols': 'all',
        'startDate': '1717939311',
        'category': 'cryptocurrencies',
    }

    const getNews = async () => {

        try {
            const result = await axios
                .get('/test')
                .then(response => {
                    if (response.data.data.result) {
                        console.log("Fetch data done.")
                        setNews(response.data.data.result);
                    }
                });
        }
        catch (e) {
            console.log(e);
        }
    }


    const { setSidebarLink } = useAppStore((state) => ({
        setSidebarLink: state.setSidebarLink,
    }))

    useEffect(() => {

        if (!news) {
            setSidebarLink("news");
            getNews();
        }

        setTimeout(() => {
            getNews();
        }, 10000);

    }, [news]);

    return (

        <>
            {news ?
                <>
                    <h2 className="font-semibold pb-2">Latest News</h2>

                    <Slider news={news} />

                    <h2 className="font-semibold pb-2">News</h2>

                    {news.map((row) => (

                        <React.Fragment key={row.aimoonhub_id}>

                            <CardRow row={row} />

                        </React.Fragment>
                    ))}
                </>

                :

                < div >
                    {
                        <div className="flex flex-wrap justify-center">

                            <div className="flex w-52 flex-col gap-4 px-3 pb-6">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                            <div className="flex w-52 flex-col gap-4 px-3 pb-6">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                            <div className="flex w-52 flex-col gap-4 px-3 pb-6">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                            <div className="flex w-52 flex-col gap-4 px-3 pb-6">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                            <div className="flex w-52 flex-col gap-4 px-3 pb-6">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                            <div className="flex w-52 flex-col gap-4 px-3 pb-6">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                            <div className="flex w-52 flex-col gap-4 px-3 pb-6">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                            <div className="flex w-52 flex-col gap-4 px-3 pb-6">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                            <div className="flex w-52 flex-col gap-4 px-3 pb-6">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                            <div className="flex w-52 flex-col gap-4 px-3 pb-6">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>

                        </div>
                    }

                </div >
            }

        </>
    );
}



