import { Navbar, CartContainer } from './components'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './Store'
import { useEffect } from 'react'
import { calculateTotal } from './features/cart/cartSlice'

export const App = () => {
  const { cartItems } = useSelector((store: RootState) => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}
