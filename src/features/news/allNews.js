import React, { useEffect, useState } from "react";
import axios from "../../../utils/services/news/api";

import { Header } from "../core/Header";
import { Footer } from "../core/Footer";
import CardColumn from "../core/components/CardColumn.jsx";


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

        await axios.post('/api/news').then(function (response) {
            setNews(response.data.data.result);
        });
    }


    useEffect(() => {
        if (!news)
            getNews();

        else
            console.log(news);

    }, [news]);


    return (
        <>

            <Header activeLink="news" />

            <div className="flex flex-wrap justify-center">
                {news?.map((row) => (
                    <React.Fragment key="key">

                      <CardColumn row={row} />

                    </React.Fragment>
                ))}
            </div>


            <Footer />

        </>
    );
}
