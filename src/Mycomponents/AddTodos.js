import React, { useState } from "react";

 const AddTodos = ({addTodos}) => {
     const [title,settitle] = useState("");
     const [desc, setdesc] = useState("");
     const submit=(e)=>{
      e.preventDefault();
      if(!title||!desc){
          alert("title and description can not be blanck");
      }else{
        addTodos(title,desc);
        settitle("");
        setdesc("");
          }
     }
    return (
        <div className=" container my-3">
            <h2>AddTodo</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text"value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc}  onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">AddTodo</button>
            </form>
        </div>
        
    )
}
export default AddTodos;
