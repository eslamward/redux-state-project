import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    status: null,// pending | success | failed
    error: null,
    quote: ""

}

const quoteReducer = createSlice({
    name: "quote",
    initialState,
    reducers: {
        changeState: (state, action) => {

            state.status = action.payload.status,
                state.loading = action.payload.loading
            state.error = action.payload.error
            state.quote = action.payload.quote
        }
    }
})



export const getQuoteAction = () => {

    return async (dispatch) => {
        dispatch(
            quoteAction.changeState({ status: "pending", quote: "", loading: true, error: null })
        )

        const getData = async () => {
            const response = await fetch("https://api.quotable.io/random")

            if (!response.ok) {
                throw new Error("Cant Fetch Quots Now")
            }

            const data = await response.json()

            return data
        }

        try {
            const { content } = await getData()
            dispatch(
                quoteAction.changeState({
                    loading: false,
                    status: "success",
                    quote: content,
                    error: null
                })
            )
        } catch (error) {
            dispatch(
                quoteAction.changeState({
                    loading: false,
                    status: "faild",
                    quote: "",
                    error: error.message
                })
            )
        }

    }
}


const quoteAction = quoteReducer.actions
export default quoteReducer.reducer
