import { useSelector } from 'react-redux'
import { CartIcon } from '../icons'
import { RootState } from '../Store'

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-state-type
 * @see https://react-redux.js.org/using-react-redux/usage-with-typescript#typing-the-useselector-hook
 */
export const Navbar = () => {
  const { amount } = useSelector((store: RootState) => {
    return store.cart
  })

  return (
    <nav>
      <div className='nav-center'>
        <h3>Redux Toolkit</h3>
        <div className='nav-container'>
          <CartIcon />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}
