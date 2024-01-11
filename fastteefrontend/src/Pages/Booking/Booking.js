import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {Button, Card, CardBody, CardFooter, CardHeader} from "@material-tailwind/react";

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
        <div className="bg-gray-100 columns-1">
            <div className="relative isolate px-6 pt-14 lg:px-8 h-screen">
                <div className="mx-auto my-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="mx-auto">
                        <div>
                            <Card className="drop-shadow p-5 m-1 w-96 mx-auto">
                                <CardHeader>
                                    <h1 className="text-xl">Rate Selection:</h1>
                                </CardHeader>
                                <CardBody>

                                    Holes: 18 <br/>
                                    <span><Button onClick={handleClick} className="float-right text-xl bg-emerald-600 hover:bg-emerald-800 rounded-3xl w-24 py-3">Book</Button></span>
                                    Players: {singleTimeInfo.availableSpots} <br/>
                                    Time: {singleTimeInfo.time} <br/>
                                </CardBody>
                            </Card>
                        </div>
                        <div>
                            <Card className="drop-shadow w-96 mx-auto mt-5 p-5">
                                <CardHeader className="text-xl">Fenner Hill Golf Club</CardHeader>
                                <CardBody>(401) 539-8000<br/> 33 Wheeler Ln, Hope Valley, RI, 02832

                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}