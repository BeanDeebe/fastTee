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
        <div className="bg-gray-100 columns-2">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div>
                        <div>
                            <Card className="drop-shadow  p-5">
                                <CardHeader className="text-xl">Fenner Hill Golf Club</CardHeader>
                                <CardBody>(401) 539-8000<br/> 33 Wheeler Ln, Hope Valley, RI, 02832
                                <p className="text-xs">The Windsor Parke Team is excited to welcome you to Windsor Parke.  Please note: Singles, twosomes and threesomes may be paired up at the discretion of the facility. The course reserves the right to move your tee-time up to 10 minutes from it's original reserved time. To ensure you have a great experience, please consider the following:
                                    Online tee-times are prepaid at the time of booking. Should you need to cancel ahead of your tee-time, please do so through the email confirmation. All fees will be refunded automatically. In the event your tee-time is canceled during play, you will be provided a raincheck. The Windsor Parke Grille is a perfect location to enjoy breakfast and/or lunch before or after your round. The Windsor Parke Golf Shop is a must visit after your round of golf. Windsor Parke does NOT allow riders on FRIDAY, SATURDAY or SUNDAY! Sorry for any inconvenience. You are responsible for your golf carts and any damage incurred.</p></CardBody>
                            </Card>
                        </div>
                        <div>
                            <Card className="drop-shadow p-5 m-1">
                                <CardHeader>
                                    Rate Selection:
                                </CardHeader>
                                <CardBody>
                                    Holes: 18 <br/>
                                    Players: 4 <br/>
                                    Time: 08:00 <br/>
                                </CardBody>
                            </Card>
                            <Card className="drop-shadow p-5 m-1">
                                <CardHeader>
                                    Rate Selection:
                                </CardHeader>
                                <CardBody>
                                    Holes: 18 <br/>
                                    Players: 4 <br/>
                                    Time: 08:00 <br/>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}