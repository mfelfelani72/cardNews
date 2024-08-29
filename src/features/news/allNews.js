import React, { useEffect, useState } from "react";
import CardRow from "../core/components/CardRow.jsx";


import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';


export function AllNews() {

    const images = ['https://images.pexels.com/photos/16770561/pexels-photo-16770561/free-photo-of-scenic-view-of-green-hills-and-mountains.jpeg', 'https://images.pexels.com/photos/20041507/pexels-photo-20041507/free-photo-of-close-up-of-sleeping-cat.jpeg', 'https://images.pexels.com/photos/12187128/pexels-photo-12187128.jpeg', 'https://images.pexels.com/photos/11785594/pexels-photo-11785594.jpeg']
    return (
        <>

            <h2 className="font-semibold pb-2">Latest News</h2>

            <div className="bg-white border-2 mb-2 pr-2 z-10">


                <Swiper
                    modules={[Autoplay, A11y]}
                    speed={5000}
                    spaceBetween={30} // Adjust the spacing as needed
                    slidesPerView={1} // Show only one slide by default
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}

                >

                    {images.map((img, index) => (
                        <SwiperSlide key={index}>

                            <div className="flex flex-row">
                                <div className="basis-3/4">
                                    <a href='/news#'>
                                        <img
                                            src={img}
                                            alt={`slide-${index + 1}`}
                                            className='w-full h-80 select-none'
                                        />
                                    </a></div>
                                <div className="basis-1/4">
                                    ewqewqe
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div >

            <h2 className="font-semibold pb-2">News</h2>

            <CardRow />
            <CardRow />
            <CardRow />
            <CardRow />
            <CardRow />


        </>
    );
}



