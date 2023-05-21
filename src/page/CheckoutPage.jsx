import React from 'react'
import styled from 'styled-components'
import { FormRow, FormArea, Title } from '../components'
import { useSelector } from 'react-redux'
import { CartItem } from '../components'
import { Link } from 'react-router-dom'
const CheckoutPage = () => {
  const { cart } = useSelector((store) => store.cart)

  return (
    <Wrapper>
      <div className='left'>
        {cart.length > 0 ? (
          <div className='cart-info'>
            <div className='cart-title'>
              <Title title='cart' />
            </div>
            <div className='cart-items'>
              {cart.map((item) => {
                return <CartItem {...item} />
              })}
            </div>
          </div>
        ) : (
          <>
            <h4 className='no-items'>There is no item in your cart</h4>
            <Link to='/' className='btn '>
              Back Home
            </Link>
          </>
        )}
      </div>
      <div className='right'>
        <div className='customer-info'>
          <div className='cart-title'>
            <Title title='checkout' />
          </div>
          <div>
            <FormRow />
            <FormRow />
            <FormRow />
            <FormRow />
            <FormArea />
          </div>
          <div className='footer'>
            <p className='flex'>
              <span>Subtotal:</span>
              <span>200000</span>
            </p>
            <p className='flex'>
              <span>Subtotal:</span>
              <span>200000</span>
            </p>
            <p className='flex'>
              <span>Subtotal:</span>
              <span>200000DD</span>
            </p>
            <p className='flex'>
              <span>Total:</span>
              <span className='color'>200000</span>
            </p>
          </div>
          <button className='btn block'>Submit</button>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  min-height: calc(100vh - 4rem);
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  .left {
    padding: 1rem 2rem;
  }
  .right {
    padding: 1rem 3rem;
    background: var(--background-grey1);
    min-height: calc(100vh - 4rem);
  }
  .cart-info,
  .customer-info {
    max-width: 600px;
    margin: 0 auto;
  }
  .cart-title {
    text-align: center;
    text-transform: capitalize;
    padding-bottom: 1rem;
  }
  .toggle-icon {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 1.4rem;
    border: none;
    cursor: pointer;
    background: transparent;
    color: var(--primary500);
  }
  .toggle-icon:hover {
    color: var(--primary400);
  }
  .cart-item {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 0.8rem;
    align-items: center;
    margin-bottom: 1rem;
  }
  .cart-item-img {
    width: 160px;
    height: 100px;
  }

  .amount {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.6rem;
  }
  .color {
    color: var(--primary500);
  }
  .sub-total {
    padding: 1rem 0;
  }

  .footer p,
  h5 {
    padding: 0.2rem 0;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .block {
    margin-top: 0.5rem;
  }
  .no-items {
    margin-bottom: 0.5rem;
  }
`
export default CheckoutPage
