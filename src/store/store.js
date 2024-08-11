import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo_reducer";
import authReducer from "./auth_reducer";


const store = configureStore({

    reducer: { todo: todoReducer, auth: authReducer }
})

export default store