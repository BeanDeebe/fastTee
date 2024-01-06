import React from "react";
import {useLocation} from "react-router-dom";

export default function Booking() {

    const location = useLocation();
    const data = location.state;

    return (
        <div className="columns-3">
            <div>
                <br/>
            </div>
            <div>
                <h1>{data.tid}</h1>
            </div>
            <div>
                <br/>
            </div>
        </div>
    )
}