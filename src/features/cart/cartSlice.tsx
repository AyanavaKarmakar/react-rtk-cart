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
    removeItem: (state, action) => {
      const itemId = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
    },
    increaseItemQuantity: (state, action) => {
      const itemId = action.payload

      const cartItem = state.cartItems.find((item) => item.id === itemId)

      if (cartItem !== undefined) {
        cartItem.amount += 1
      }
    },
    decreaseItemQuantity: (state, action) => {
      const itemId = action.payload

      const cartItem = state.cartItems.find((item) => item.id === itemId)

      if (cartItem !== undefined && cartItem.amount > 0) {
        cartItem.amount -= 1
      }
    },
  },
})

export default cartSlice.reducer
export const { clearCart, removeItem, increaseItemQuantity, decreaseItemQuantity } =
  cartSlice.actions
