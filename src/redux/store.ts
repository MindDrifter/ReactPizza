import { configureStore } from "@reduxjs/toolkit"
import cartSilce from "./slices/cartSlice"
import pizzaSlice from "./slices/pizzaSlice"

export const store = configureStore({
  reducer:{
    pizza: pizzaSlice,
    cart: cartSilce
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch