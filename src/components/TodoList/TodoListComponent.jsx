import React from 'react';
import { Todoitem } from '../TodoItem/TodoItem';
import "./ListStyle.css"

function TodoListComponent ({todos, todoDel}){
    return(
        <div className="todosContainer">
            {
                todos.map(todo => 
                    <Todoitem title = {todo} key={todo} todoDelete = {todoDel}/>
                )
            }
        </div>
    )
}

export default TodoListComponent;