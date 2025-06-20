
import { configureStore } from '@reduxjs/toolkit'
import loadingProgressReducer from './slice'


export const store = configureStore({
  reducer: {
    loadingProgress: loadingProgressReducer,
  },
})