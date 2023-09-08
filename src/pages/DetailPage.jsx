import React from "react";
import OpenBook from "../components/OpenBook/OpenBook";

export const DetailPage = (props) => {
    return(
        <div className="container">
            <OpenBook {...props} />
        </div>
    )
}