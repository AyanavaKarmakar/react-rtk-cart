import { Navbar, CartContainer, Modal } from './components'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from './Store'
import { useEffect } from 'react'
import { calculateTotal, getCartItems } from './features/cart/cartSlice'

export const App = () => {
  const { cartItems, isLoading } = useSelector((store: RootState) => store.cart)
  const { isOpen } = useSelector((store: RootState) => store.modal)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
