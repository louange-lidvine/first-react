import React from "react";
import TodoList from "./assets/todo-app/todolist.jsX";
// import {Form} from "./assets/form.jsx"
const App=()=>{
  
    return (
        <div>
            {/* <Form/> */}
            <div className="todo-app"  >
          Todo App
          <TodoList/> 
          
            </div>


        </div>
    )

}
export default App