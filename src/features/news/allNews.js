import React, { useEffect, useState } from "react";
import axios from "../../../utils/services/news/api";

import { Header } from "../core/Header";
import { Footer } from "../core/Footer";


export function AllNews() {

    const [news, setNews] = useState(null);

    let defaultImage = "https://flowbite.com/docs/images/blog/image-1.jpg";


    const getNews = async () => {

        // console.log(axios.post('/GetPaginatedData'
        //     , {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'X-CSRFTOKEN': 'MZbC2erNnHA22p7afLdWYIISBcDyU0vP665s9sASOs7kQd4b4VzIoCwQ2Gxp08lL'
        //         }
        //     }
        // ));
        // setNews(await axios.post('/api/news'));
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
            {/* <Header  activeLink="news"/> */}
            <Header activeLink="news" />
            <div className="flex mx-10">
                {news?.map((row) => (
                    <React.Fragment key="key">
                        {/* card body */}

                        <div className="mx-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href={row.link} target="_blank">
                                <img className="rounded-t-lg" src={row.thImage == " " ? defaultImage : row.thImage } alt="" />
                            </a>
                            <div className="p-5">

                                <h3 className="font-bold">Autor : {row.author}</h3>
                                <div className="flex">
                                    <h3 className="mr-1">{row.category}</h3>
                                    <h6 className="ml-1 mb-4 font-thin"> - {row.provider}</h6>
                                </div>
                                
                                <a href={row.link} target="_blank">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {row.title}
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {row.articleBody == " " ? "You can click Read more to Read New You can click Read more to Read New You can click Read more to Read New" : row.articleBody.split(/\s+/).slice(0, 20).join(" ") + " ..."}
                                </p>
                    
                                <a href={row.link} target="_blank" className="mb-0 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>


                        {/* card body */}
                    </React.Fragment>
                ))}
            </div>


            <Footer />

        </>
    );
}
