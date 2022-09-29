import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-state-type
 */
export type RootState = ReturnType<typeof store.getState>
