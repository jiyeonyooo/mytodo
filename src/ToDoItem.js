import './ToDoItem.css';

const ToDoItem = () => {
    return (
        <div className="ToDoItem">
            <button className="checkbox"></button>
            <div className="text">방청소하기</div>
            <button className="remove">-</button>
        </div>
    );
};

export default ToDoItem;