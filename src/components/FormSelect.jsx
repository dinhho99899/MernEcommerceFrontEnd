import React from 'react'
import styled from 'styled-components'
const FormSelect = ({}) => {
  return (
    <Wrapper>
      <p>Sort: </p>
      <select className='select'>
        <option value='s'>sssss</option>
      </select>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  .select {
    padding: 0.375rem 0.5rem;
    border: none;
    border-radius: 0.2rem;
    background: transparent;
    font-size: 1.1rem;
    color: var(--text-color);
  }
`
export default FormSelect
