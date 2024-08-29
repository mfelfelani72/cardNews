import React, { useEffect, useState } from "react";
import axios from "../../../utils/services/news/api";
import CardRow from "../core/components/CardRow.jsx";


import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';

import { dateHelper } from "../../../utils/helpers/dateHelper.js";
import { stringHelper } from "../../../utils/helpers/stringHelper.js";
import avatar from "../../../assets/images/avatar.png";

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

    let defaultImage = "https://flowbite.com/docs/images/blog/image-1.jpg";

    return (
        <>



            <h2 className="font-semibold pb-2">Latest News</h2>


            <div className="bg-white border-2 mb-2 p-2 z-10">


                <Swiper
                    modules={[Autoplay, A11y,]}
                    speed={5000}
                    effect="fade"
                    spaceBetween={30} // Adjust the spacing as needed
                    slidesPerView={1} // Show only one slide by default
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}

                >

                    {news?.map((row, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-row">
                                <div className="basis-2/4">
                                    <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                        <div className="mb-8">
                                            <div className="flex">
                                                <h3 className="mr-1">{row.category}</h3>
                                                <h5 className="ml-1 font-thin"> - {row.provider}</h5>
                                            </div>
                                            <div className="text-black font-bold text-xl mb-2"> {row.title}</div>
                                            <p className="text-grey-darker text-base">
                                                {row.articleBody == " " ? "You can click Read more to Read New You can click Read more to Read New You can click Read more to Read New" : stringHelper(row.articleBody, 20)}
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <img className="w-10 h-10 rounded-full mr-4" src={avatar} alt="Avatar of Jonathan Reinink" />
                                            <div className="text-sm">
                                                <p className="text-black leading-none">{row.author}</p>
                                                <p className="text-grey-dark">{dateHelper(row.pubDate)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="basis-3/5">
                                    <a href='/news#'>
                                        <img
                                            src={row.thImage == " " ? defaultImage : row.thImage}
                                            alt={`slide-${index + 1}`}
                                            className='w-full h-80 select-none'
                                        />
                                    </a></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div >

            <h2 className="font-semibold pb-2">News</h2>

            {news?.map((row) => (

                <React.Fragment key={row.aimoonhub_id}>

                    <CardRow row={row} />

                </React.Fragment>
            ))}



        </>
    );
}



