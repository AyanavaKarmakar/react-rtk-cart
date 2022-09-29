import { CartItem } from './CartItem'
import { useSelector } from 'react-redux'
import { RootState } from '../Store'

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-state-type
 * @see https://react-redux.js.org/using-react-redux/usage-with-typescript#typing-the-useselector-hook
 */
export const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store: RootState) => store.cart)

  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>Your Cart</h2>
          <h4 className='empty-cart'>is currently empty...</h4>
        </header>
      </section>
    )
  }

  return (
    <section className='cart'>
      <header>
        <h2>Your Cart</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            Total <span>₹{total}</span>
          </h4>
        </div>
        <button className='btn clear-btn'>Clear Cart</button>
      </footer>
    </section>
  )
}
