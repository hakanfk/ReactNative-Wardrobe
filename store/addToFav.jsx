import { createSlice } from '@reduxjs/toolkit'

export const addToFav = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        addToFavorite: (state, action) => {

            state.ids.push(action.payload.id)

        },

        removeFromFav: (state, action) => {

            state.ids.splice(state.ids.indexOf(action.payload.id), 1)

        }
    }
})

export const { addToFavorite, removeFromFav } = addToFav.actions;
export default addToFav.reducer