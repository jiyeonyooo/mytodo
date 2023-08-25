import './ToDoList.css';
import ToDoItem from './ToDoItem.js';

const ToDoList = () => {
    return (
        <div>
            <div className='list'>
                <ToDoItem/>
                <ToDoItem/>
                <ToDoItem/>
            </div>
        </div>
    );
};

export default ToDoList;