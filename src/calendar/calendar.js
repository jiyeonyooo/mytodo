import {useState} from 'react';
import './calendar.css';

const Calendar = () => {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const [currentMonth, setcurrentMonth] = useState(new Date());

    const pre = () => {
        setcurrentMonth(new Date());
    }

    const post = () => {
        setcurrentMonth(currentMonth.getMonth()+1+1);
    }
    
    return (
        <div className="calendar">
            <div className='calendarNav'>
                <button onClick={pre}>전</button>
                <span>{currentMonth.getFullYear()}년 {currentMonth.getMonth()+1}월</span>
                <button onClick={post}>후</button>
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