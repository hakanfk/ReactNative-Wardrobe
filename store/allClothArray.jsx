import { createSlice } from '@reduxjs/toolkit'

export const allClothArray = createSlice({
    name: 'userClothes',
    initialState: {
        clothes: []
    },
    reducers: {
        addToClothes: (state, action) => {

            state.clothes.push(action.payload)

        },
    }
})

export const { addToClothes } = allClothArray.actions;
export default allClothArray.reducer