import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './slice';
import todoReducer from "./todoSlice";

export const store = configureStore({
    reducer: {
        userData: usersReducer,
        todosData: todoReducer
    }
});
 