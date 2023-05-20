import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './clothNumberCounter'

import favoritesReducer from './addToFav'
import tokenerReducer from './token'
import clothesReducer from './allClothArray'

export const store = configureStore({
    reducer: {
        clothNumber: counterReducer,
        favoriteClothes: favoritesReducer,
        setToken: tokenerReducer,
        addCloth: clothesReducer
    }
})