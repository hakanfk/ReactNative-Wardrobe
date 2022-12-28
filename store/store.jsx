import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './clothNumberCounter'

import favoritesReducer from './addToFav'

export const store = configureStore({
    reducer: {
        clothNumber: counterReducer,
        favoriteClothes: favoritesReducer
    }
})