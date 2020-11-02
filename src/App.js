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

  const todoDelete = (title) =>{
    setTodo(todos.filter((todo) => todo !== title))
  }
  
  return (
    <div className="App">
      <h2 className="text-center">TodoList</h2>
      <TodoInputComponent addTodo = {addTodo} changeInputValue = {changeInputValue} inputValue = {inputValue} />
      
      <TodoListComponent todos = {todos} todoDel = {todoDelete}/>
      
    </div>
  );
}

export default App;
