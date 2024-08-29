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

                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-row">
                                <div className="basis-2/4">
                                    <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                        <div className="mb-8">
                                            <p className="text-sm text-grey-dark flex items-center">
                                                <svg className="text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                                </svg>
                                                Members only
                                            </p>
                                            <div className="text-black font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                                            <p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                                        </div>
                                        <div className="flex items-center">
                                            <img className="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink" />
                                            <div className="text-sm">
                                                <p className="text-black leading-none">Jonathan Reinink</p>
                                                <p className="text-grey-dark">Aug 18</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="basis-3/5">
                                    <a href='/news#'>
                                        <img
                                            src={img}
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

            <CardRow />
            <CardRow />
            <CardRow />
            <CardRow />
            <CardRow />


        </>
    );
}



