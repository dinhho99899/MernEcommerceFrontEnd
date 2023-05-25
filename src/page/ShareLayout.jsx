import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { Navbar, Sidebar, Footer, Cart } from '../components'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleCartTotal } from '../features/cart/CartSlice'
import { addCartToLocalStorage } from '../utils/LocalStorage'
const ShareLayout = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector((store) => store.cart)
  const { isSidebarOpen } = useSelector((store) => store.products)
  useEffect(() => {
    dispatch(handleCartTotal())
    addCartToLocalStorage(cart)
  }, [cart])
  return (
    <Wrapper>
      <Navbar />
      {isSidebarOpen && <Sidebar />}
      <Cart />
      <div className='main-container'>
        <Outlet />
      </div>
      <Footer />
    </Wrapper>
  )
}
const Wrapper = styled.main`
  .main-container {
    margin-top: 4.5rem;
  }
`
export default ShareLayout
