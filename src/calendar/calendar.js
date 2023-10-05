import { useState } from 'react';
import './calendar.css';

const Calendar = () => {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const [currentMonth, setcurrentMonth] = useState(new Date());

    const pre = () => {
        setcurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    }

    const post = () => {
        setcurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    }

    const buildCalendar = () => {
        const curMonthStartDay = new Date(currentMonth.getFullYear(),
            currentMonth.getMonth(), 1).getDay();
        //현재 month의 1일의 요일 -> 전 달 날짜를 몇 개나 써야하는지 알아보기 위함
        //0-6(일-월)까지 숫자로 반환됨

        const curMonthEndDate = new Date(currentMonth.getFullYear(),
            currentMonth.getMonth() + 1, 0);

        const preMonthEndDate = new Date(currentMonth.getFullYear(),
            currentMonth.getMonth(), 0);

        const nextMonthStartDate = new Date(currentMonth.getFullYear(),
            currentMonth.getMonth() + 1, 1);

        const days = Array.from({ length: curMonthStartDay }, (_, i) => {
            return new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth() - 1,
                preMonthEndDate.getDate() - i
            );
        }).reverse();
        //이전 달에서 보여야 하는 날짜만큼

        days.push(
            ...Array.from(
                { length: curMonthEndDate.getDate() },
                (_, i) => new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1)
            )
        );

        const remainingdays = 7 - (days.length % 7) //다음 달에서 보여야 하는 날짜 계산

        days.push(...Array.from({ length: remainingdays }, (_, i) => {
            return new Date(
                nextMonthStartDate.getFullYear(),
                nextMonthStartDate.getMonth(),
                i + 1
            );
        }));

        console.log(days);
        return days
    };

    const makeClassName = (calendarArray) => {
        return calendarArray.map((day, i) => {
            if (day.getMonth() < currentMonth.getMonth()) {
                return (
                    <td key={i} className="preMonthDays">
                        {day.getDate()}
                    </td>
                );
            }
            if (day.getMonth() > currentMonth.getMonth()) {
                return (
                    <td key={i} className="nextMonthDays">
                        {day.getDate()}
                    </td>
                );
            }
            return (
                <td key={i} className="currentMonthDays">
                    {day.getDate()}
                </td>
            );

        })
    };

    const divideWeeks = (classificationCalendar) => {
        return classificationCalendar.reduce(
            (acc, day, i) => {
                if (i % 7 === 0) acc.push([day]);
                else acc[acc.length - 1].push(day);
                return acc;
            }, []);
    };

    const calendarArray = buildCalendar();
    const classificationCalendar = makeClassName(calendarArray);
    const calendarRows = divideWeeks(classificationCalendar);

    console.log(calendarRows);

    return (
        <div className="calendar">
            <div className='calendarNav'>
                <button onClick={pre}>&lt;</button>
                <span>{currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월</span>
                <button onClick={post}>&gt;</button>
            </div>
            <table>
                <thead>
                    <tr>
                        {daysOfWeek.map((day, i) => (<th key={i}>{day}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {calendarRows.map((row, i) => (<tr key={i}>{row}</tr>))}
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;