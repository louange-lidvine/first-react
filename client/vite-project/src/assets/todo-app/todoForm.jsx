import React, { useState } from "react";
function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete: false
    });
    setInput("");
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a Todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
        ></input>
        <button className="todo-button">Add a todo</button>
      </form>
    </div>
  );
}
export default TodoForm;
