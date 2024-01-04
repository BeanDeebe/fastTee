import React, {useEffect, useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import {
    List,
    ListItem,
    Card, Button
} from "@material-tailwind/react";
import ReactPaginate from "react-paginate";
import "./style.css";

function DisplayTimes({ currentTimes }) {
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
                                    <span><Button className="bg-emerald-600 hover:bg-emerald-800 rounded-2xl w-16 m-5 p-2">Book</Button></span>
                                </div>
                            </ListItem>
                        </List>
                    </Card>
                )}
        </div>
    )
}

export default function TeeSheetView() {
    const [dateState, setDateState] = useState(new Date());
    const [times, setTimes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [timesPerPage] = useState(10);

    const date = moment(dateState).format("YYYY-MM-DD");
    const apiCall = process.env.REACT_APP_GET_TEE_TIMES + date;

    const indexOfLastTime = currentPage * timesPerPage;
    const indexofFirstTime = indexOfLastTime - timesPerPage;
    const currentShownTimes = times.slice(indexofFirstTime, indexOfLastTime);

    const handlePageClick = (event) => {
        const newPage = event.selected;
        setCurrentPage(newPage);
    };

    useEffect(() => {
        fetch(apiCall)
            .then((res) => res.json())
            .then((res) => {setTimes(res)})
            .catch((err) => console.error(err));
    }, [dateState])

    const changeDate = (e) => {
        setDateState(e)

        console.log(e);
    }

    const pageCount = Math.ceil(times.length / timesPerPage);

    return (
        <div className="grid grid-cols-3 m-3">
            <div>
                    <Calendar
                        value={dateState}
                        onChange={changeDate}
                    />
                    <p>Viewing tee times for <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
            </div>
            <div className="m-1">
                <h1>Available Times for {date}</h1>
                    <DisplayTimes
                        currentTimes={currentShownTimes} />
                <div>
                <ReactPaginate
                    className="horizontal-pagination"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={3}
                    pageCount={pageCount}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    renderOnZeroPageCount={null}
                />
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

