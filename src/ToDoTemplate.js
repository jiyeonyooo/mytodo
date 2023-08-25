import './ToDoTemplate.css'

const ToDoTemplate = ({children}) => {
    return (
        <div className='frame'>
            <div className='title'>지연이의 투두리스트</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default ToDoTemplate;