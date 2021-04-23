import React from 'react';

const Form = ({setInputText, inputText, todos, setTodos, setStatus}) => {
   const inputTextHandler = (e) => {
        // console.log('e', e.target.value)
        setInputText(e.target.value)
    };


    const submitHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,
            {
                text: inputText,
                id: Math.random() * 100,
                completed: false
            }
        ]);
        setInputText("");

    }

    const handleStatus = (e) =>{
        setStatus(e.target.value )
    }
    return(
     <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select onChange={handleStatus} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
     </form>
    );
};
export default Form;