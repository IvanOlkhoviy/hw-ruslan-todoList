import React from 'react'

export function Todoitem({title, todoDelete}) {


    return (
        <div className="row justify-content-center no-gutters mb-3 ">
            <p className="col-5 text-left item">{title}</p>
            <button className="btn btn-danger"
                onClick={() => todoDelete(title)}>
                &#x2718;
            </button>
        </div>
    )
}
