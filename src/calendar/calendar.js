import {useState} from 'react';
import './calendar.css';

const Calendar = () => {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const [currentMonth, setcurrentMonth] = useState(new Date());

    const pre = () => {
        setcurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth()-1));
    }

    const post = () => {
        setcurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth()+1));
    }
    
    return (
        <div className="calendar">
            <div className='calendarNav'>
                <button onClick={pre}>&lt;</button>
                <span>{currentMonth.getFullYear()}년 {currentMonth.getMonth()+1}월</span>
                <button onClick={post}>&gt;</button>
            </div>
            <table>
                <thead>
                    <tr>
                        {daysOfWeek.map((day, i) => (<th key={i}>{day}</th>))}
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    );
};

export default Calendar;