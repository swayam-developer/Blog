"use client";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiUsers } from "../Redux/slice";
import { useEffect } from "react";

export default function Page() {
  const dispatch = useDispatch();
  const apiUserData = useSelector((data) => data.userData.userAPIData);

  useEffect(() => {
    dispatch(fetchApiUsers());
  }, []);

  return (
    <div>
      <h1>API user List</h1>
      {apiUserData.length &&
        apiUserData.map((item) => <h4 key={item.id}> {item.name} </h4>)}
    </div>
  );
}
