import { createSlice } from '@reduxjs/toolkit'

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#createslice
 */

interface SliceState {
  cartItems: string[]
  amount: number
  total: number
  isLoading: boolean
}

const initialState: SliceState = {
  cartItems: [],
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
