import './ToDoList.css';
import ToDoItem from './ToDoItem.js';

const ToDoList = ({todos, onRemove, onToggle}) => {
    return (
        <div>
            <div className='list'>
                {todos.map (todo=>(<ToDoItem todo={todo} key={todo.id} 
                onRemove={onRemove}
                onToggle={onToggle} />))}
            </div>
        </div>
    );
};

export default ToDoList;