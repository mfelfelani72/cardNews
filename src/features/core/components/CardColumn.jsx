import React from "react";
import Button from "../components/Button.jsx";

const CardColumn = (props) => {

    let defaultImage = "https://flowbite.com/docs/images/blog/image-1.jpg";
    
    return (
        <div className="mt-10 mx-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={props.row.link} target="_blank">
                <img className="rounded-t-lg h-[300px] w-[100%]" src={props.row.thImage == " " ? defaultImage : props.row.thImage} alt="" />
            </a>
            <div className="p-5">

                <h3 className="font-bold">Autor : {props.row.author}</h3>
                <div className="flex">
                    <h3 className="mr-1">{props.row.category}</h3>
                    <h5 className="ml-1 font-thin"> - {props.row.provider}</h5>
                </div>
                <h6 className="mb-2 font-thin">{
                    new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(props.row.pubDate)}</h6>

                <a href={props.row.link} target="_blank">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {props.row.title}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {props.row.articleBody == " " ? "You can click Read more to Read New You can click Read more to Read New You can click Read more to Read New" : props.row.articleBody.split(/\s+/).slice(0, 20).join(" ") + " ..."}
                </p>
                <Button
                    href={props.row.link}
                    target="_blank"
                    className="">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Button>
            </div>
        </div>

    );
};

export default CardColumn;
