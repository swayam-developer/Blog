"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../Redux/todoSlice";

export default function Page() {
  const [todo, setTodo] = useState("");
  const todoData = useSelector((data) => data.todosData.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Add todo</h1>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add new task"
      />
      <br />
      <button onClick={() => dispatch(addTodos(todo))}>Add todo</button>
      <h5>Todo List</h5>
      {todoData.length && todoData.map((item) => <h4 key={item.id}> {item.name} </h4>)}
    </div>
  );
}
