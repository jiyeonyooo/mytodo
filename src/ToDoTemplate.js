import './ToDoTemplate.css'
import FindDate from './FindDate.js';

const ToDoTemplate = ({children}) => {
    return (
        <div className='frame'>
            <div className="todoTitle">MUST TO DO</div>
            <div className="grid">
                <div className="todoPart">
                    <div className="content">{children}</div>
                </div>
                <div className="datePart"><FindDate/></div>
                <div className="untitlePart"></div>
            </div>
        </div>
    );
};

export default ToDoTemplate;