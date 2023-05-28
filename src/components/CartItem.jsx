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
  grid-template-columns: 50px 1fr;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.3rem 0.3rem;
  padding-right: 1.5rem;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid;
  .cart-item-img {
    padding: 0.4rem 0;
  }
  .remove-item-btn {
    position: absolute;
    right: 0.1rem;
    top: 0rem;
    font-size: 1.2rem;
  }

  .info {
    text-transform: capitalize;
    justify-self: left;
    text-align: left;
  }
  p {
    text-align: left;
    padding: 0;
    margin: 0;
  }
  .color {
    color: var(--primary500);
  }
`
export default CartItem
