import './ToDoItem.css';
import {MdRadioButtonUnchecked, MdRadioButtonChecked, MdHighlightOff} from 'react-icons/md';

const ToDoItem = ( {todo, onRemove, onToggle}) => {
    
    const {id, text, checked} = todo;
    return (
        <div className="ToDoItem">
            <div className="checkbox" onClick={()=>onToggle(id)}>
                {checked === true ? <MdRadioButtonChecked/>: <MdRadioButtonUnchecked />}
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