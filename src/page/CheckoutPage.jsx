import React from 'react'
import styled from 'styled-components'
import { FormRow, FormArea, Title, CompleteOrder } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { CartItem } from '../components'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/LocalStorage'
import {
  handleChange,
  createOrder,
  createOrderWithoutAuth,
  toggleCompletedModal,
} from '../features/orders/ordersSlice'
import { toast } from 'react-toastify'
const CheckoutPage = () => {
  const { cart, total_amount } = useSelector((store) => store.cart)
  const {
    name,
    email,
    phone,
    address,
    note,
    tax,
    shippingFee,
    isCompleteModal,
  } = useSelector((store) => store.orders)
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const toggle = () => {
    dispatch(toggleCompletedModal())
  }
  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleChange({ name, value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (cart.length === 0) {
      toast.error('your cart is empty')
      return
    }
    if (!name || !email || !address || !phone) {
      toast.error('Please fill out all fields')
      return
    }
    if (!user) {
      dispatch(
        createOrderWithoutAuth({
          shippingFee,
          tax,
          items: cart,
          name,
          email,
          address,
          note,
          phone,
        })
      )
      return
    }
    dispatch(
      createOrder({
        shippingFee,
        tax,
        items: cart,
        name,
        email,
        address,
        note,
        phone,
      })
    )
  }

  return (
    <Wrapper>
      <div className='left'>
        {isCompleteModal && <CompleteOrder toggle={toggle} />}

        {cart.length > 0 ? (
          <div className='cart-info'>
            <div className='cart-title'>
              <Title title='cart' />
            </div>
            <div className='cart-items'>
              {cart.map((item) => {
                return <CartItem {...item} key={item.id} />
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
        <form className='customer-info' onSubmit={handleSubmit}>
          <div className='cart-title'>
            <Title title='checkout' />
          </div>
          <div className='form'>
            <FormRow
              name='name'
              type='text'
              value={name}
              handleChange={handleInput}
            />
            <FormRow
              name='email'
              type='text'
              value={email}
              handleChange={handleInput}
            />
            <FormRow
              name='phone'
              type='tel'
              value={phone}
              handleChange={handleInput}
              extraClass='c'
              min='10'
              max='12'
            />
            <FormRow
              name='address'
              type='text'
              value={address}
              handleChange={handleInput}
              extraClass='d'
            />
            <FormArea
              name='note'
              type='text'
              value={note}
              handleChange={handleInput}
              placeholder='Note'
              extraClass='e'
            />
          </div>
          <div className='footer'>
            <p className='flex'>
              <span>Subtotal:</span>
              <span>{formatPrice(total_amount)}đ</span>
            </p>
            <p className='flex'>
              <span>Shipping:</span>
              <span>{formatPrice(shippingFee)}đ</span>
            </p>
            <p className='flex'>
              <span>Tax:</span>
              <span>
                {formatPrice(
                  (total_amount + shippingFee) * (Number(tax) / 100)
                )}
                đ
              </span>
            </p>
            <p className='flex'>
              <span>Total:</span>
              <span className='color'>
                {formatPrice(total_amount + shippingFee)}đ
              </span>
            </p>
          </div>
          <button className='btn block' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  min-height: calc(100vh - 4.5rem);
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    .form {
      display: grid;
      grid-template-areas: 'a b' 'c c' 'd d' 'e e';
      gap: 0.5rem;
      row-gap: 0rem;
    }
    .c {
      grid-area: c;
    }
    .d {
      grid-area: d;
    }
    .e {
      grid-area: e;
    }
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
  .center {
    width: 100%;
    height: calc(100vh - 4.5rem);
    display: grid;
    place-items: center;
  }
  .center h4,
  p {
    text-align: center;
  }
  .center p {
    padding: 0.5rem 0;
  }
  .margin {
    text-align: center;
  }
`
export default CheckoutPage
