import React, { useEffect, useState } from "react";
import CardRow from "../core/components/CardRow.jsx";

export function AllNews() {
    return (
        <>

            <h2 className="font-semibold pb-2">Latest News</h2>

            <CardRow />
            <CardRow />
            <CardRow />
            <CardRow />
            <CardRow />

            <h2 className="font-semibold pb-2">News</h2>

            <CardRow />
            <CardRow />
            <CardRow />
            <CardRow />
            <CardRow />


        </>
    );
}



