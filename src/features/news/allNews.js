import React, { useEffect, useState } from "react";
import axios from "../../../utils/services/news/api";
import useAppStore from "../../../utils/stores/AppStore.js"


const PAGE_NUMBER = 1;
const ROW_KEY = 1;

export function AllNews() {

    const [page, setPage] = useState(PAGE_NUMBER);
    const [news, setNews] = useState([]);

    const { setSidebarLink } = useAppStore((state) => ({
        setSidebarLink: state.setSidebarLink,
    }))

    useEffect(() => {

        setSidebarLink("news");


        setTimeout(async () => {
            const result = await axios.post(
                `http://localhost:8000/api/test2/`, 'category=cryptocurrencies&symbols=all&from=1716373411&to=1725633001&pageLimit=10&page=2'
            ).then(response => {
                if (response.data.data.result) {
                    console.log("Fetch data done.")
                    setNews((prev) => {
                        return [...prev, ...response.data.data.result];
                    });
                    // setLoading(false);
                }
            });

        }, 1500);


    }, [page]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = async () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            // setLoading(true);
            setPage((prev) => prev + 1);
        }
    };


    return (

        <>
            <div className="flex flex-row">
                <div className="w-[70%]">

                    {news.map((row) => (

                        <React.Fragment key={row.aimoonhub_id}>

                            <div className="border-b">
                                <div className="p-4">{row.title}</div>
                            </div>

                        </React.Fragment>
                    ))}


                </div>
                <div className="w-[30%] border-l">
                    <div className="fixed">
                        <div className="">start</div>
                        <div className="">sadsa</div>
                        <div className="">sadsa</div>
                        <div className="">sadsa</div>
                        <div className="">sadsa</div>
                        <div className="">sadsa</div>
                        <div className="">sadsa</div>
                        <div className="">sadsa</div>
                        <div className="">sadsa</div>
                        <div className="">sadsa</div>
                        <div className="">sadsa</div>
                        <div className="">sadsa</div>
                        <div className="">sadsa</div>
                        <div className="">sadsa</div>
                        <div className="">sadsa</div>
                        <div className="">sadsa</div>
                        <div className="">sadsa</div>
                        <div className="">sadsa</div>
                        <div className="">sadsa</div>
                        <div className="">sadsa</div>
                        <div className="">sadsa</div>
                        <div className="">sadsa</div>
                        <div className="">end</div>
                    </div>
                </div>
            </div>
        </>
    );
}



