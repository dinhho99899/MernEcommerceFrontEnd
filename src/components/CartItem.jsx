import React from 'react'
import heroimg from '../assets/images/hero.png'
import styled from 'styled-components'
import { AmountBtns } from '../components'
import { removeItem, toggleItemAmount } from '../features/cart/CartSlice'
import { useDispatch } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'
import { formatPrice } from '../utils/LocalStorage'
const CartItem = ({ id, amount, name, price, weight }) => {
  const dispatch = useDispatch()
  const decreaseAmount = () => {
    dispatch(toggleItemAmount({ value: 'decrease', id }))
  }
  const increaseAmount = () => {
    dispatch(toggleItemAmount({ value: 'increase', id }))
  }
  return (
    <Wrapper className='cart-item' key={id}>
      <img src={heroimg} alt='cart' className='cart-item-img'></img>
      <div className='info'>
        <p>{name}</p>
        <p>{formatPrice(price)}đ</p>
        <p>{weight} kg</p>
        <p>sub total: {formatPrice(price * amount)}đ</p>
        <AmountBtns
          decreaseAmount={decreaseAmount}
          amount={amount}
          increaseAmount={increaseAmount}
        />
      </div>
      <button
        className='transparent-btn link remove-item-btn'
        onClick={() => {
          dispatch(removeItem({ itemId: id }))
        }}
      >
        <AiOutlineClose />
      </button>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 0.8rem;
  margin-bottom: 1rem;
  padding: 0.3rem 0.8rem;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid;

  .remove-item-btn {
    position: absolute;
    right: 0.2rem;
    top: 0.1rem;
    font-size: 1.4rem;
  }

  .info {
    text-transform: capitalize;
  }

  .color {
    color: var(--primary500);
  }
`
export default CartItem
