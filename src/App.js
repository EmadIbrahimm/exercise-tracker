import React, { useState, useEffect } from 'react'
import './App.css';
//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(()=>{
    getLocalTodos()
  }, []);

  useEffect(()=>{
    filterHandler()
    saveLocalTodos()
  }, [todos, status])
const filterHandler = () => {
  switch(status) {
      case "completed":
        setFilteredTodos(todos.filter((todo)=> todo.completed === true ));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo)=> todo.completed === false ));
        break;
        default:
          setFilteredTodos(todos)

  }
}

//save to local storage
const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

const getLocalTodos = () => {
  if (localStorage.getItem("todo") === null) {
    localStorage.setItem("todos", JSON.stringify([]));
  } else {
   let myLocal = localStorage.getItem("todos", JSON.stringify(todos));
   setTodos(myLocal);
    console.log('myLocal',myLocal)
  } 
}
 
  return (
    <div className="App">
      <header>
        <h1>Emad's Tesk Tracker {inputText} </h1>
      </header>
        <Form 
            setInputText={setInputText}
            inputText={inputText}
            todos={todos}
            setTodos={setTodos}
            setStatus={setStatus}
          />

        <TodoList 
            todos={todos} 
            setTodos={setTodos}
            filteredTodos={filteredTodos}
        />
    </div>
  );
}

export default App;