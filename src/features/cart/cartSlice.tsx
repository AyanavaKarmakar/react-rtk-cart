import { createSlice } from '@reduxjs/toolkit'
import { cartItems, CartItem } from '../../cartItems'

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#createslice
 */

interface SliceState {
  cartItems: CartItem[]
  amount: number
  total: number
  isLoading: boolean
}

const initialState: SliceState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
})

// console.log(cartSlice)

export default cartSlice.reducer
