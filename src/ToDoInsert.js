import './ToDoInsert.css';

const ToDoInsert = () => {
    return (
        <div className="insert">
            <input placeholder="할 일을 추가해주세요!"></input>
            <button type="submit">+</button>
        </div>
    );
};

export default ToDoInsert;