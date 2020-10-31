import React, {useState} from "react"
import TodoInputComponent  from "./components/TodoInput/TodoInputComponent"
import TodoListComponent from "./components/TodoList/TodoListComponent";

function App() {
  const [todos, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () =>{
    if(inputValue){
    setTodo([...todos, inputValue])
    setInputValue("");
    }
  };

  const changeInputValue = (value) =>{
    setInputValue(value);
  };

  const todoDelete = (id) =>{
    setTodo(todos.filter((todo) => todo !== id))
  }
  
  return (
    <div className="App">
      <h2 className="text-center">TodoList</h2>
      <TodoInputComponent addTodo = {addTodo} changeInputValue = {changeInputValue} inputValue = {inputValue} />
      {
      todos.map((todo) => (
            <TodoListComponent key = {todo} id = {todo} todoTitle = {todo} todoDelete = {todoDelete} />
      ))
      }
    </div>
  );
}

export default App;
