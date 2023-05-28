import React from 'react'
import styled from 'styled-components'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const AmountBtns = ({ amount, decreaseAmount, increaseAmount }) => {
  return (
    <Wrapper>
      <span className='amount'>
        <span className='negative' onClick={decreaseAmount}>
          <AiOutlineMinus />
        </span>
        <h4 className='color'>{amount}</h4>
        <span className='positive' onClick={increaseAmount}>
          <AiOutlinePlus />
        </span>
      </span>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .amount {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    justify-content: left;
  }
  .negative:hover,
  .positive:hover {
    color: var(--primary500);
    cursor: pointer;
  }
  .negative,
  .positive {
    cursor: pointer;
    font-size: 1rem;
    padding-top: 4px;
  }
  .color {
    color: var(--primary500);
    padding: 0rem 0.5rem;
  }
`
export default AmountBtns
