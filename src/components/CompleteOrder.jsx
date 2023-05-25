import React from 'react'
import styled from 'styled-components'
import { BsCheckCircle } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import { useSelector } from 'react-redux'
const CompleteOrder = ({ toggle }) => {
  const { order } = useSelector((store) => store.orders)
  const { email } = order
  const handle = (e) => {
    if (e.target.classList.contains('modal')) {
      toggle()
      return
    }
  }
  return (
    <Wrapper onClick={handle} className='modal'>
      <div className='modal-container'>
        <span className='close-btn' onClick={toggle}>
          <IoMdClose />
        </span>
        <div className='header'>
          <span className='icon'>
            <BsCheckCircle />
          </span>
          <h4>Thanks for your order</h4>
          <p>The order comfirmation has been sent to {email} </p>
        </div>
        <div></div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: grid;
  place-items: center;
  .modal-container {
    width: 500px;
    background: var(--background-container);
    box-shadow: 0px 0px 2px 1px var(--background-grey1);
    padding: 2rem 2rem;
    border-radius: var(--radius);
    position: relative;
  }
  .close-btn {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    font-size: 1.6rem;
    color: red;
    cursor: pointer;
  }
  .icon {
    color: var(--primary500);
  }
  .header {
    text-align: center;
    font-size: 2rem;
  }
`
export default CompleteOrder
