import React from 'react'
import Todo from "../Mycomponents/Todo";

  const Todoos = (props) => {
    return (
        <div className="container">
            <h3 className="my-3">Todoos List</h3>
            {props.todos.length===0? "No todos display":
            props.todos.map((todos)=>{
              return<Todo todos= {todos} key={todos.sno} onDelete={props.onDelete}/>
         }) 
       }
        </div>
    )
}
export default Todoos;