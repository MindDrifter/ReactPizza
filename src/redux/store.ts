import { configureStore } from "@reduxjs/toolkit"
import pizzaSlice from "./slices/pizzaSlice"
import sortTagSlice from './slices/sortTagSlice'

export const store = configureStore({
  reducer:{
    pizza: pizzaSlice,
    sortTag: sortTagSlice

  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch