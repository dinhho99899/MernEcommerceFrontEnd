import React from 'react'
import styled from 'styled-components'
const AmountBtns = ({ amount, decreaseAmount, increaseAmount }) => {
  return (
    <Wrapper>
      <span className='amount'>
        <span className='negative' onClick={decreaseAmount}>
          -
        </span>
        <h4 className='color'>{amount}</h4>
        <span className='positive' onClick={increaseAmount}>
          +
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
  .negative:hover {
    color: var(--primary500);
    cursor: pointer;
  }

  .positive:hover {
    color: var(--primary500);
    cursor: pointer;
  }
  .color {
    color: var(--primary500);
    padding: 0rem 0.5rem;
  }
`
export default AmountBtns
