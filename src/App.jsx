import TodoInput from "./components/todoInput"
import Todolist from "./components/todolist"
import { useState , useEffect } from "react";

function App() {

  const [todos, setTodos] = useState([
    "go to the gym",
    'study react',
    "eat dinner"
  ]);

  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos:
      newList
    }));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDelete(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData();
    setTodos(newTodoList);
  }

  function handleEdit(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDelete(index);
  }

  useEffect(() => {
    if ( !localStorage ) {
      return;
    }

    let localTodos = localStorage.getItem('todos');
    if( !localTodos ) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <Todolist handleDelete={handleDelete} todos={todos} handleEdit={handleEdit}/>
    </>
  )
}

export default App
