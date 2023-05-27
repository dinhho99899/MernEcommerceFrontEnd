import React from 'react'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
const FormRowX = ({
  extraClass,
  name,
  value,
  labelText,
  type,
  handleChange,
  placeholder,
  min,
  max,
  accept,
}) => {
  return (
    <Wrapper className={extraClass}>
      <span className='absolute'>
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
          accept={accept}
        />
        <span className='ab'>
          <BsSearch />
        </span>
      </span>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
  .absolute {
    position: relative;
  }
  .ab {
    position: absolute;
    left: 0.6rem;
    top: 50%;
    padding-top: 5px;
    transform: translateY(-50%);
    font-size: 1.1rem;
    color: var(--grey-text);
  }
  .form-row {
    display: block;
    padding: 0.6rem 0.6rem;
    padding-left: 2.2rem;
    width: 100%;
    border-radius: 0.35rem;
    border: 1px solid var(--grey200);
    font-size: 1rem;
    background: var(--input-color);
  }

  .form-row::placeholder {
    text-transform: capitalize;
  }
`
export default FormRowX
