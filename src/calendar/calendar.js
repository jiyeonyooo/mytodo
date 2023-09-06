import {useState} from 'react';
import './calendar.css';

const Calendar = () => {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const [currentMonth, setCurrentMonth] = useState(new Date());
    
    return (
        <div className="calendar">
            <div className='calendarNav'>
                <span>{currentMonth.getFullYear()}년 {currentMonth.getMonth()+1}월</span>
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