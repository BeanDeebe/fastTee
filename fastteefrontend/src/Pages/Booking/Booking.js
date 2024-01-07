import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {Button} from "@material-tailwind/react";

export default function Booking() {

    const location = useLocation();
    const data = location.state;
    const [singleTimeInfo, setSingleTimeInfo] = useState([]);

    const apiCall = process.env.REACT_APP_GET_SINGLE_TIME + data.tid;
    useEffect(() => {
        fetch(apiCall)
            .then((res) => res.json())
            .then((res) => {setSingleTimeInfo(res)})
            .catch((err) => console.error(err));
    }, []);

    const handleClick = (e) => {

    }


    console.log(singleTimeInfo);

    return (
        <div className="bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <div>
                            <h1 className="text-xl">Viewing details for: {singleTimeInfo.time} on {singleTimeInfo.date}</h1>
                        </div>
                        <div>
                            Spots available to book: {singleTimeInfo.availableSpots}
                        </div>
                        <span><Button  className="bg-emerald-600 hover:bg-emerald-800 rounded-2xl w-16 m-5 p-2">Book</Button></span>
                    </div>
                </div>
            </div>
        </div>
    )
}