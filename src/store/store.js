import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo_reducer";
import authReducer from "./auth_reducer";
import quoteReducer from "./quote_reducer";


const store = configureStore({

    reducer: { todo: todoReducer, auth: authReducer, quote: quoteReducer }
})

export default store