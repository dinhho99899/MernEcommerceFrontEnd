import React from 'react'
import styled from 'styled-components'
const FormSelectX = ({ name, list, unit, handleChange, value }) => {
  return (
    <Wrapper>
      <select
        className='select'
        name={name}
        value={value}
        onChange={handleChange}
      >
        {list.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
              {unit}
            </option>
          )
        })}
      </select>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .select {
    display: block;
    padding: 0.6rem 1rem;
    min-width: 150px;
    width: 100%;
    border-radius: 0.35rem;
    border: 1px solid var(--grey200);
    font-size: 1rem;
    background: var(--input-color);
    text-transform: capitalize;
  }
`
export default FormSelectX
