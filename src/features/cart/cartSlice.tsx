import { createSlice } from '@reduxjs/toolkit'
import { cartItems, CartItemInterface } from '../../cartItems'

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#createslice
 */

interface SliceState {
  cartItems: CartItemInterface[]
  amount: number
  total: number
  isLoading: boolean
}

const initialState: SliceState = {
  cartItems: cartItems,
  /**
   * TODO Revert to `amount: 0`
   */
  amount: 4,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },
  },
})

export default cartSlice.reducer
export const { clearCart } = cartSlice.actions
