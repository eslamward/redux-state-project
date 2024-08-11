import { createReducer, createSlice } from "@reduxjs/toolkit";



const initialState = {
    authinticate: false
}
const authReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state) => {
            state.authinticate = true
        },
        logout: (state) => {
            state.authinticate = false
        }
    }
})



export const authAction = authReducer.actions

export default authReducer.reducer