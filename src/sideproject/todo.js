import React, { useState, useEffect } from "react";


function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(todo === "") { //empty일 경우
      return;
    }
    setTodo(""); //엔터치면은 값 사라지게하기 절대 todo = "". 곧바로 state수정 불가능 => func
    setTodos(current => [todo, ...current]);
  };
  console.log(todos)
  return <div>
    <h1>My todos ({todos.length})</h1>
    <form onSubmit={onSubmit}>
    <input 
      value= {todo} 
      onChange={onChange} 
      type="text" 
      placeholder="to do!"/>
    <button>add</button>
    </form>
    <hr/>
    <ul>
    {todos.map((tomato, index) => <li key={index}>{tomato}</li>)}
    </ul> 
  </div>

}


export default App;
