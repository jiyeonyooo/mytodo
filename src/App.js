import './App.css';
import ToDoTemplate from './ToDoTemplate.js';
import ToDoList from './ToDoList.js';
import ToDoInsert from './ToDoInsert.js';

const App = () => {
  return (
    <div>
      <ToDoTemplate>
        <ToDoList/>
        <ToDoInsert/>
      </ToDoTemplate>
    </div>
  );
};

export default App;
