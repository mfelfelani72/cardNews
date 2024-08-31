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

        // console.log(await axios.post('/News/GetNewsbyDateCategory/', {data}, {
        //     headers: headers
        // }
        // ));

        await axios.get('/test').then(function (response) {
            if (response.data.data.result) {
                console.log("Fetch data done.")
                setNews(response.data.data.result);
            }
            else
                console.log("Fetch data failed.")
        });

        // await axios.post('/api/news').then(function (response) {
        //     setNews(response.data.data.result);
        // });
    }


    const { setSidebarLink } = useAppStore((state) => ({
        setSidebarLink: state.setSidebarLink,
    }))

    useEffect(() => {

        if (!news) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add("dark");
            }
            else {
                document.documentElement.classList.remove("dark");
            }
            setSidebarLink("news");
            getNews();
        }

        setTimeout(() => {
            getNews();
        }, 10000);

    }, [news]);

    return (

        <>
            <h2 className="font-semibold pb-2">Latest News</h2>

            <Slider news={news} />

            <h2 className="font-semibold pb-2">News</h2>

            {news?.map((row) => (

                <React.Fragment key={row.aimoonhub_id}>

                    <CardRow row={row} />

                </React.Fragment>
            ))}

        </>
    );
}



