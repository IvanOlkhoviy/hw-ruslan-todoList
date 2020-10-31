import React from 'react';
import "./ListStyle.css"

function TodoListComponent({id, todoTitle, todoDelete}) {
    
    return(
        <div className = "row justify-content-center no-gutters mb-3 ">
            <p className = "col-5 text-left item">{todoTitle}</p>
            <button id = {id} className = "btn btn-danger"
             onClick = { (e) => todoDelete(e.target.id) }>
                &#x2718;
            </button>
        </div>
    )
}

export default TodoListComponent;