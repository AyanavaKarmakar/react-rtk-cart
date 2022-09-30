import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { cartItems, CartItemInterface } from '../../cartItems'

/**
 * @see https://course-api.com/
 * @see https://github.com/john-smilga/redux-toolkit-tutorial/blob/main/starter/README.md
 */
const url = 'https://course-api.com/react-useReducer-cart-project'

export const getCartItems = createAsyncThunk('cart/getCartItems', async () => {
  try {
    const response = await fetch(url)
    return await response.json()
  } catch (err) {
    return console.log(err)
  }
})

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

      if (cartItem !== undefined) {
        cartItem.amount -= 1
      }
    },
    calculateTotal: (state) => {
      let amount = 0
      let total = 0

      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.amount * parseInt(item.price)
      })

      state.amount = amount
      state.total = total
    },
  },
  extraReducers: {
    /**
     * @see https://github.com/reduxjs/redux-toolkit/issues/478
     */
    [getCartItems.pending.toString()]: (state: SliceState) => {
      state.isLoading = true
    },
    [getCartItems.fulfilled.toString()]: (
      state: SliceState,
      action: { payload: CartItemInterface[] },
    ) => {
      state.isLoading = false
      state.cartItems = action.payload
    },
    [getCartItems.rejected.toString()]: (state: SliceState) => {
      state.isLoading = false
    },
  },
})

export const { clearCart, removeItem, increaseItemQuantity, decreaseItemQuantity, calculateTotal } =
  cartSlice.actions
export default cartSlice.reducer
