import './ToDoTemplate.css'
import Calendar from './calendar/calendar.js';
import { BiSolidStar } from 'react-icons/bi';
import Gauge from './gauge/gauge.js'

const ToDoTemplate = ({ children, todos }) => {
    return (
        <div className='frame'>
            <div className="todoTitle">MY TO DO</div>
            <div className="grid">
                <div className="todoPart">
                    <div className="content">{children}</div>
                </div>
                <div className="datePart">
                    <Calendar></Calendar>
                </div>
                <div className="achievementPart">
                    <div className="achievementHead">
                        <BiSolidStar className="achievementStar" />
                        <h2>오늘의 성취도</h2>
                        <BiSolidStar className="achievementStar" />
                    </div>
                    <Gauge todos={todos}></Gauge>
                </div>
            </div>
        </div>
    );
};

export default ToDoTemplate;