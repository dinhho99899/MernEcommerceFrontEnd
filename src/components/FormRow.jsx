import React from 'react'
import styled from 'styled-components'
const FormRow = ({
  classname = '',
  name,
  value,
  labelText,
  type,
  handleChange,
}) => {
  return (
    <Wrapper className={classname}>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className='form-row'
      />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin-bottom: 1rem;
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
  }
  .form-row:focus {
    border: 1px solid var(--grey200);
  }
`
export default FormRow
