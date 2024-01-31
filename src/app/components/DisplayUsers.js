 "use client";
 import { useDispatch, useSelector } from "react-redux";
 import { removeUser } from "../Redux/slice";

 export default function DisplayUsers() {
  const userData = useSelector((data) => data.userData.users);
  console.log(userData);
  const dispatch = useDispatch();

  return (
    <div className="display-user">
      <h1> Display User List</h1>
      {userData.map((item) => (
        <div className="user-item" key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => dispatch(removeUser(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
}
