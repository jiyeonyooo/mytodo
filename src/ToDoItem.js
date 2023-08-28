import './ToDoItem.css';
import {MdRadioButtonUnchecked, MdRadioButtonChecked, MdHighlightOff} from 'react-icons/md';
import {BsPatchCheckFill} from 'react-icons/bs';
import {BiMinusCircle} from 'react-icons/bi';

const ToDoItem = ( {todo, onRemove, onToggle}) => {
    
    const {id, text, checked} = todo;
    return (
        <div className="ToDoItem">
            <div className="checkbox" onClick={()=>onToggle(id)}>
                {checked === true ? <BsPatchCheckFill color="rgba(93,52,236,1)"/> 
                : <MdRadioButtonUnchecked color="rgba(93,52,236,1)"/>}
            </div>
            <div className="text">{text}</div>
            <div className="remove" 
            onClick={()=>onRemove(id)}>
                -
            </div>
        </div>
    );
};

export default ToDoItem;