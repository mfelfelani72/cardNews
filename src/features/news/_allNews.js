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


    useEffect(() => {

        if (!news)
            getNews();

        setTimeout(() => {
            getNews();
        }, 2000);

    }, [news]);


    return (
        <>

            <Header activeLink="news" />

            <div className="flex w-52 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>

            <div className="flex flex-wrap justify-center">
                {news?.map((row) => (

                    <React.Fragment key={row.aimoonhub_id}>

                        <CardColumn row={row} />

                    </React.Fragment>
                ))}
            </div>


            <Footer />

        </>
    );
}
