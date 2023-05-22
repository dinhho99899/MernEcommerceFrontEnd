import React from 'react'
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
          <span
            key={index}
            onClick={handleChange}
            name={name}
            data-id={index}
            className='star'
          >
            {star}
          </span>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.span`
  color: #ffa858;
  .star:hover {
    cursor: pointer;
  }
`
export default Stars
