import "./App.css";
import Header from "./Mycomponents/Header";
import AddTodos from "./Mycomponents/AddTodos";
import Todoos from "./Mycomponents/Todoos";
import Footer from "./Mycomponents/Footer";
import React, { useState, useEffect } from "react";


//import  Todo from "./Mycomponents/Todo";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    console.log("i am on Ondelete of todos", todos);
    setTodoos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodos = (title, desc) => {
    console.log("i am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1
    }

    console.log(sno)
    const myTodos = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodoos([...todos, myTodos])
    console.log(myTodos);

  }
  const [todos, setTodoos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Header title="My Todoos List" searchBar={false} />
      <AddTodos addTodos={addTodos} />
      <Todoos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );




}

export default App;
