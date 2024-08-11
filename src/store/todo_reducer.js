import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    todos: []
}

const todoReducer = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            const indexID = state.todos.findIndex(
                todo => todo.id === action.payload
            )
            if (indexID > -1) {
                state.todos = state.todos.filter(todo =>
                    todo.id !== action.payload
                )
            }
        },

        completeTodo: (state, action) => {
            const indexID = state.todos.findIndex(
                todo => todo.id === action.payload
            )
            if (indexID > -1) {
                const fetshedTodo = state.todos[indexID]
                const updatedTodo = {
                    ...fetshedTodo,
                    complete: true
                }
                state.todos[indexID] = updatedTodo
            }

        },

        archiveTodo: (state, action) => {
            const indexID = state.todos.findIndex(
                todo => todo.id === action.payload
            )
            if (indexID > -1) {
                const fetshedTodo = state.todos[indexID]
                const updatedTodo = {
                    ...fetshedTodo,
                    archive: true
                }
                state.todos[indexID] = updatedTodo
            }
        },

    }

})


export const todosAction = todoReducer.actions
export default todoReducer.reducer