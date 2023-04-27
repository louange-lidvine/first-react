import React, { useState } from "react";
// import TodoForm from './todoForm'
// import {RiCloseCircleLine} from 'react-icons/ri'
// import {TiEdit} from 'react-icons/ti'

function Todo({ todos, completeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  console.log("todos", todos);
  return (
    <>
      {todos.map((todo, index) => (
        <div key={index}>
          <div
            style={{
              cursor: "pointer",
              backgroundColor: todo.isComplete ? "green" : "red",
            }}
          >
            <p>{todo.text}</p>
            <span>{todo.isComplete ? "done" : "pending"}</span>
            <button
              style={{
                backgroundColor: "gray",
              }}
              onClick={completeTodo(todo.id)}
            >
              complete
            </button>
          </div>
          {/* <div className='icons'>
                <RiCloseCircleLine/>
                <TiEdit/>
            </div>
          */}
        </div>
      ))}
    </>
  );
}
export default Todo;
