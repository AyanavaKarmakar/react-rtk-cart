import { ChevronUp, ChevronDown } from '../icons'
import { CartItemInterface } from '../cartItems'
import { useDispatch } from 'react-redux'
import { removeItem } from '../features/cart/cartSlice'

export const CartItem = (props: CartItemInterface) => {
  const { id, img, title, price, amount } = props
  const dispatch = useDispatch()

  const handleRemoveItem = () => {
    dispatch(removeItem(id))
  }

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>₹{price}</h4>
        <button className='remove-btn' onClick={handleRemoveItem}>
          Remove
        </button>
      </div>
      <div>
        <button className='amount-btn'>
          <ChevronUp />
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn'>
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}
