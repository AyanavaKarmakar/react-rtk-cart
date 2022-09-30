import { closeModal } from '../features/modal/modalSlice'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'

export const Modal = () => {
  const dispatch = useDispatch()

  const handleConfirm = () => {
    dispatch(clearCart())
    dispatch(closeModal())
  }

  const handleCancel = () => {
    dispatch(closeModal())
  }

  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>Remove all items from your shopping cart?</h4>
        <div className='btn-container'>
          <button type='button' className='btn confirm-btn' onClick={handleConfirm}>
            Confirm
          </button>
          <button type='button' className='btn clear-btn' onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </aside>
  )
}
