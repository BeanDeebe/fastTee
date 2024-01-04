import React, {useState} from "react";
import {Card, List, ListItem, Button} from "@material-tailwind/react";
import {Link, useNavigate} from "react-router-dom";
export default function DisplayTimes({ currentTimes }) {
    let [teeTimeId, setTeeTimeId] = useState('');
    const navigate = useNavigate();

    const handleClick  = (event) => {
        teeTimeId = event.target.getAttribute('index');
        setTeeTimeId(teeTimeId);
        console.log(teeTimeId);

        navigate(`/teetimes/book/${teeTimeId}`)
    }

    return (
        <div>
            {currentTimes && currentTimes.map(time =>
                    <Card key={time.id}>
                        <List>
                            <ListItem ripple={false} className="py-1 p-1 pr-1 m-1 outline-none focus:bg-emerald-200 shadow hover:shadow-none hover:bg-emerald-50">
                                <div>
                                    <p className="text-xl">{time.time}</p>
                                    <p>Openings: {time.availableSpots}</p>
                                </div>
                                <div className="inline-block absolute right-0">
                                    <span><Button index={time.id}  onClick={handleClick} className="bg-emerald-600 hover:bg-emerald-800 rounded-2xl w-16 m-5 p-2">Book</Button></span>
                                </div>
                            </ListItem>
                        </List>
                    </Card>
                )}
        </div>
    )
}