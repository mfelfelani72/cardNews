import React, { useEffect, useState } from "react";
import axios from "../../../utils/services/news/api";

import Loader from "../core/components/Loader.jsx"

import useAppStore from "../../../utils/stores/AppStore.js"
import useNewsStore from "../../../utils/stores/NewsStore.js"

import Skeleton from "./Skeleton.js";
import CardRow from "../core/components/CardRow.jsx";
import ViewNews from "../core/components/ViewNews.jsx";

const PAGE_NUMBER = 1;

export function AllNews() {

    const { setSidebarLink } = useAppStore((state) => ({
        setSidebarLink: state.setSidebarLink,
    }))

    const { viewNews, setViewNews } = useNewsStore((state) => ({
        viewNews: state.viewNews,
        setViewNews: state.setViewNews,
    }))

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState();

    const [newsCategory, setNewsCategory] = useState('cryptocurrencies');
    const [newsSymbols, setNewsSymbols] = useState('all');
    const [newsFrom, setNewsFrom] = useState('1716373411');
    const [newsTo, setNewsTo] = useState('1725633001');
    const [newsPageLimit, setNewsPageLimit] = useState(10);
    const [newsPage, setNewsPage] = useState(PAGE_NUMBER);

    const getNews = async () => {

        try {
            const result = await axios
                .post(`http://localhost:8000/api/test2/`,
                    `category=${newsCategory}&symbols=${newsSymbols}&from=${newsFrom}&to=${newsTo}&pageLimit=${newsPageLimit}&page=${newsPage}`
                )
                .then(response => {
                    if (response.data.data.result) {

                        console.log("Fetch data done.")
                        setNews((prev) => {
                            return [...prev, ...response.data.data.result];
                        });

                        setViewNews(response.data.data.result[0]);
                        console.log(newsPage);
                        setNewsPage((prev) => prev + 1);
                        setLoading(false);
                    }
                });
        }
        catch (error) {
            console.log(error)
        }

    }

    const handleScroll = async () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setLoading(true);
            console.log(newsPage);
            getNews();
        }
    };

    useEffect(() => {

        if (news.length == 0)
            getNews();

        setSidebarLink("news");

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, [news, viewNews, newsPage]);


    return (
        <>
            {
                news.length != 0 ?

                    < div className="flex flex-row bg-B-V-bright dark:bg-DB-dim text-T-bright dark:text-DT-bright" >
                        <div className="w-[73%]">

                            {news.map((row, index) => (

                                <CardRow row={row} key={index} />

                            ))}
                            {loading && <Loader />}

                        </div>
                        <div className="w-[25%] ltr:border-l rtl:border-r">
                            <ViewNews new={viewNews} />
                        </div>
                    </div >

                    :

                    <Skeleton />

            }
        </>

    );
}



