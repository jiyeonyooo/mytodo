import { useState, useRef, useCallback } from 'react';
import './App.css';
import ToDoTemplate from './ToDoTemplate.js';
import ToDoList from './ToDoList.js';
import ToDoInsert from './ToDoInsert.js';

const App = () => {
  const [todos, setTodos] = useState([{
    id: 0,
    text: '오늘 하루도 파이팅 🔥',
    checked: false,
  },]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    }, [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,),
      );
      console.log(todos);
    }, [todos],
  );

  return (
    <div>
      <ToDoTemplate todos={todos}>
        <ToDoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        <ToDoInsert onInsert={onInsert} />
      </ToDoTemplate>
      <div className="copyright">@yeonjiyooo_</div>
    </div>
  );
};

export default App;
