import React from 'react'
import styled from 'styled-components'
const FormArea = ({ name, labelText }) => {
  return (
    <Wrapper>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <textarea type='text' className='form-row' />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin-bottom: 1rem;
  .form-label {
    font-size: 1rem;
  }
  .form-row {
    margin-top: 0.5rem;
    display: block;
    padding: 0.5rem 0.4rem;
    width: 100%;
    border-radius: 0.35rem;
    border: 1px solid var(--grey200);
    min-height: 120px;
    font-size: 1.2rem;
  }
`
export default FormArea
