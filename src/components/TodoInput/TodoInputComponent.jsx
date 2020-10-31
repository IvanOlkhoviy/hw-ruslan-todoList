import React from "react";


function TodoInputComponent({inputValue,changeInputValue,addTodo}) {


    return (
        <div className = "row inputContainer justify-content-center mb-5">
            <input className = "col-4 mr-3" placeholder = "Please enter what you have to do"
            onChange = {(e) => changeInputValue(e.target.value)}
            value = {inputValue}>
            </input>
            <button className = "btn btn-dark" onClick = {addTodo}>Add todo</button>
        </div>  
        )
}

export default TodoInputComponent;