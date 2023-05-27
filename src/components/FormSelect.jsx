import React from 'react'
import styled from 'styled-components'
const FormSelect = ({
  name,
  title,
  list = [],
  unit,
  labelText,
  handleChange,
}) => {
  return (
    <Wrapper>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <select className='select' onChange={handleChange}>
        {list.map((item) => {
          return (
            <option value={item}>
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
  .form-label {
    font-size: 1rem;
    text-transform: capitalize;
  }
  .select {
    border-radius: 0.35rem;
    margin-top: 0.5rem;
    border: 1px solid var(--grey200);
    background: transparent;
    width: 100%;
    font-size: 1.1rem;
    color: var(--text-color);
    padding: 0.6rem 0.6rem;
  }
`
export default FormSelect
