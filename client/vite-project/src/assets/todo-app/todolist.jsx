import React, { useState } from "react";
import TodoForm from "./todoForm";
import Todo from "./todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    // || /^\s*$/.test(todo.text)
    if (!todo.text) {
      return;
    }
    // const newtodos = [todo, ...todos];
    setTodos((prev) => {
      return [todo, ...prev];
    });
    console.log(todos);
    // console.log(...todos);
  };
  const completeTodo = (id) => {
    // const newTodos = todos.map((todo) => {
    //       if (todo.id === id) {
    //         todo.isComplete = !todo.isComplete;
    //       }
    //     });
    // setTodos(newTodos);
    setTodos((prev) => {
      prev.forEach((todo) => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
      });
      return prev;
    });
  };
  return (
    <div>
      <h1>What's the plan for today</h1>
      <TodoForm addTodo={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} />
    </div>
  );
}
export default TodoList;
