import React from 'react'
import styled from 'styled-components'
const FormRow = ({
  extraClass,
  name,
  value,
  labelText,
  type,
  handleChange,
  placeholder,
  min,
  max,
}) => {
  return (
    <Wrapper className={extraClass}>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className='form-row'
        minLength={min}
        maxLength={max}
      />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  padding: 0.5rem 0;
  .form-label {
    font-size: 1rem;
    text-transform: capitalize;
  }
  .form-row {
    margin-top: 0.5rem;
    display: block;
    padding: 0.6rem 0.6rem;
    width: 100%;
    border-radius: 0.35rem;
    border: 1px solid var(--grey200);
    font-size: 1rem;
    background: var(--input-color);
  }
  .form-row:focus {
    border: 1px solid var(--grey200);
  }
  .form-row::placeholder {
    text-transform: capitalize;
  }
`
export default FormRow
