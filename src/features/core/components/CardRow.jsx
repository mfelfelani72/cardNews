import React from "react";
import { dateHelper } from "../../../../utils/helpers/dateHelper.js";
import { stringHelper } from "../../../../utils/helpers/stringHelper.js";

import logo from "../../../../assets/images/logo-shape.png";
import avatar from "../../../../assets/images/avatar.png";


const CardRow = (props) => {
    let defaultImage = "https://flowbite.com/docs/images/blog/image-1.jpg";
    return (
        <>
            <div className="w-full lg:flex mb-4 z-0">

                <div className="relative lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                    <img className="h-full" src={props.row.thImage == " " ? defaultImage : props.row.thImage} alt="Woman holding a mug" />

                    <div className="absolute backdrop-blur-sm bg-white/60 right-2 bottom-2 h-8 w-10 rounded-md">
                        <img className="h-6 w-8 m-1" src={logo} />
                    </div>
                </div>






                <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
                    <div className="mb-8">
                        <div className="flex">
                            <h3 className="mr-1">{props.row.category}</h3>
                            <h5 className="ml-1 font-thin"> - {props.row.provider}</h5>
                        </div>
                        <div className="text-black font-bold text-xl mb-2"> {props.row.title}</div>
                        <p className="text-grey-darker text-base">
                            {props.row.articleBody == " " ? "You can click Read more to Read New You can click Read more to Read New You can click Read more to Read New" : stringHelper(props.row.articleBody, 20)}
                        </p>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 h-10 rounded-full mr-4" src={avatar} alt="Avatar of Jonathan Reinink" />
                        <div className="text-sm">
                            <p className="text-black leading-none">{props.row.author}</p>
                            <p className="text-grey-dark">{dateHelper(props.row.pubDate)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardRow;