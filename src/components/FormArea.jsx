import React from 'react'
import styled from 'styled-components'
const FormArea = ({
  name,
  labelText,
  value,
  type,
  placeholder,
  handleChange,
  extraClass,
}) => {
  return (
    <Wrapper className={extraClass}>
      <div>
        <label htmlFor={name} className='form-label'>
          {labelText || name}
        </label>
        <textarea
          type={type}
          className='form-row'
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .form-label {
    text-transform: capitalize;
  }
  .form-row {
    display: block;
    padding: 0.5rem 0.4rem;
    width: 100%;
    border-radius: 0.35rem;
    border: 1px solid var(--grey200);
    min-height: 110px;
    font-size: 1.2rem;
    background: var(--input-color);
    margin-top: 0.5rem;
  }
  .form-row::placeholder {
    text-transform: capitalize;
    font-family: var(--font);
    font-size: 1rem;
  }
`
export default FormArea
