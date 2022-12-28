import { createSlice } from '@reduxjs/toolkit'

export const clothCounter = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByValue: (state, action) => {
            state.value += action.payload
        },
        setByValue: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { increment, decrement, incrementByValue, setByValue } = clothCounter.actions

export default clothCounter.reducer