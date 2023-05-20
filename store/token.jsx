import { createSlice } from '@reduxjs/toolkit'

export const setToken = createSlice({
    name: "tokener",
    initialState: {
        token: ''
    },
    reducers: {
        setTokenString: (state, action) => {
            state.token = action.payload
        }
    }
})

export const { setTokenString } = setToken.actions

export default setToken.reducer