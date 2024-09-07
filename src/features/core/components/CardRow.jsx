import React from "react";
import { dateHelper } from "../../../../utils/helpers/dateHelper.js";
import { stringHelper } from "../../../../utils/helpers/stringHelper.js";

import logo from "../../../../assets/images/logo-shape.png";
import avatar from "../../../../assets/images/avatar.png";

import useNewsStore from "../../../../utils/stores/NewsStore.js"

const CardRow = (props) => {

    const { setViewNews } = useNewsStore((state) => ({
        setViewNews: state.setViewNews,
    }))

    let defaultImage = "https://flowbite.com/docs/images/blog/image-1.jpg";
    return (
        <>
            <div className="border-b">
                <div className="p-4" onClick={() => { setViewNews(props.row); }} >
                    {props.row.title}
                </div>
            </div>
        </>
    );
}

export default CardRow;