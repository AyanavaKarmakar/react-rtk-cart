import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import modalReducer from './features/modal/modalSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
})

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-state-
 * @see https://redux-toolkit.js.org/tutorials/typescript#define-root-state-and-dispatch-types
 */
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
