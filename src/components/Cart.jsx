import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCartModal } from '../features/cart/CartSlice'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { CartItem } from '../components'
const Cart = () => {
  const dispatch = useDispatch()
  const { isCartModalOpen, cart, total_amount } = useSelector(
    (store) => store.cart
  )
  return (
    <Wrapper>
      <div className={isCartModalOpen ? 'cart-modal show-cart' : 'cart-modal'}>
        <div className='cart'>
          <div className='cart-title'>
            <Title title='cart' />
            <button
              className='toggle-icon'
              onClick={() => {
                dispatch(toggleCartModal())
              }}
            >
              <AiOutlineArrowRight />
            </button>
          </div>
          {cart.length > 0 ? (
            <div className='cart-items'>
              {cart.map((item) => {
                return <CartItem {...item} key={item.id} />
              })}
            </div>
          ) : (
            <p className='empty'>You cart is empty</p>
          )}

          <div className='btn-container'>
            <p>
              Sub total: <span className='color'>{total_amount}đ</span>
            </p>
            <Link
              to='/checkout'
              className='btn checkout-btn'
              onClick={() => {
                dispatch(toggleCartModal())
              }}
            >
              Check out
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.aside`
  width: 100%;
  height: 100%;
  .cart-modal {
    position: fixed;
    right: 0;
    top: 5rem;
    width: 0;
    max-width: 400px;
    height: 0;
    background: var(--background-container);
    transition: var(--transition);
    z-index: 999;
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
  }
  .show-cart {
    width: 100%;
    height: calc(80vh - 4.5rem);
    right: 1rem;
  }
  .empty {
    text-align: center;
    padding-top: 1rem;
  }
  .cart {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
  }

  .cart-title {
    text-align: center;
    text-transform: capitalize;
    position: relative;
    height: 4.5rem;
    background: var(--background-grey1);
    display: grid;
    align-items: center;
  }
  .toggle-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.4rem;
    border: none;
    cursor: pointer;
    background: transparent;
    color: var(--primary500);
  }
  .toggle-icon:hover {
    color: var(--primary400);
  }
  .cart-items {
    max-height: calc(100vh - 8rem);
    overflow-x: hidden;
    width: 90%;
    margin: 1rem auto;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: 1rem 1rem;
    background: var(--background-grey1);
  }
`
export default Cart
