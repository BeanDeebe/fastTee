import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

export default function App() {
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
        console.log(e);
    }
    return (
        <div className="grid grid-cols-3 m-5">
            <div>
                    <Calendar
                        value={dateState}
                        onChange={changeDate}
                    />
                    <p>Viewing tee times for <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
            </div>
            <div>
                <h1>test</h1>
            </div>
            <div>
                <h1>test2</h1>
            </div>
        </div>
    )
}

