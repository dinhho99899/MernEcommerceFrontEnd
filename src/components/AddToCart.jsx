import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { addToCart, openCartModal } from '../features/cart/CartSlice'
import { useDispatch } from 'react-redux'
const AddToCart = ({ product }) => {
  const dispatch = useDispatch()
  const weightA = [0.5, 1]
  const [amount, setAmount] = useState(1)
  const [weight, setWeight] = useState(weightA[0])
  const { _id: id, name, price, image } = product

  return (
    <span>
      <button
        className='grey-btn'
        onClick={() => {
          dispatch(addToCart({ name, weight, id, price, image, amount }))
          dispatch(openCartModal())
        }}
      >
        <FaShoppingCart />
      </button>
    </span>
  )
}

export default AddToCart
