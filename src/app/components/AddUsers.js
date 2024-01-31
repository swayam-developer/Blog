"use client";
import { useState } from "react";
import { addUser } from "../Redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";

export default function AddUsers() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const userDispatch = () => {
    dispatch(addUser(name));
    console.log(name);
  };

  return (
    <div className="add-user">
      <h1>Add User List</h1>
      <input
        type="text"
        className="add-user-input"
        placeholder="Add New User"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" onClick={userDispatch} className="add-user-btn">
        Add User
      </button>
      <div>
      <Link href="/removeUser">Go to remove user</Link>
      <br />
      <Link href="/todoList">Go to todoList</Link>
      <br />
      <Link href="/apiUsers"> GO to API</Link>
      </div>
    </div>
  );
}
