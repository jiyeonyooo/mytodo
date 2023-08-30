import { useState, useCallback} from 'react';
import './ToDoInsert.css';

const ToDoInsert = ({onInsert}) => {

    const [value, setValue] = useState('');

    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert,value],
    );

    return (
        <form className="insert" onSubmit={onSubmit}>
            <input 
                placeholder="할 일을 추가 해주세요!"
                value={value}
                onChange={onChange}
            />
            <button type="submit">+</button>
        </form>
    );
};

export default ToDoInsert;