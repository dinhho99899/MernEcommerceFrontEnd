import React, { useState } from 'react'
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs'
import styled from 'styled-components'
const Stars = ({ numbers, extraClass, name, handleChange }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5
    if (numbers >= index + 1) {
      return <BsStarFill />
    } else if (numbers >= number) {
      return <BsStarHalf />
    } else {
      return <BsStar />
    }
  })

  return (
    <Wrapper className={extraClass}>
      {stars.map((star, index) => {
        return (
          <button
            key={index}
            data-id={index + 1}
            name={name}
            className='star'
            onClick={handleChange}
          >
            {star}
          </button>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.span`
  z-index: 999;
  button {
    background: transparent;
    border: none;
  }
  .star {
    color: #ffa858;
  }
  .star:hover {
    cursor: pointer;
    color: #dfa858;
  }
`
export default Stars
