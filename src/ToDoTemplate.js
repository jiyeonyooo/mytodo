import './ToDoTemplate.css'
import Calendar from './calendar/calendar.js';

const ToDoTemplate = ({ children }) => {
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
                <div className="untitlePart"></div>
            </div>
        </div>
    );
};

export default ToDoTemplate;