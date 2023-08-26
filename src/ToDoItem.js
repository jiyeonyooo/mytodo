import './ToDoItem.css';
import {MdRadioButtonUnchecked, MdRadioButtonChecked, MdHighlightOff} from 'react-icons/md';

const ToDoItem = ( {todo, onRemove, onToggle}) => {
    const checkk = 0;
    const buttonChange = (checkk) => {
        checkk += 1;
    }
    const {id, text, checked} = todo;
    return (
        <div className="ToDoItem">
            <div className="checkbox" onClick={(checkk)=>buttonChange(checkk)}>
                {checkk === 0 ? <MdRadioButtonChecked/>: <MdRadioButtonUnchecked />}
            </div>
            <div className="text">{text}</div>
            <div className="remove" 
            onClick={()=>onRemove(id)}>
                <MdHighlightOff/>
            </div>
        </div>
    );
};

export default ToDoItem;