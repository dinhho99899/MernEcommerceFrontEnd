import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { FormRow, FormSelect, FormArea } from '../../components'
import styled from 'styled-components'

const AddProduct = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleJob = (e) => {}
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>Add Product</h3>
        <div className='form-center'>
          <div className='form-info'>
            <FormRow name='name' type='text' />
            <FormRow name='category' type='text' />
            <FormRow name='price' type='number' />
            <FormRow name='description' type='text' />
            <FormRow name='description' type='text' />
            <FormRow name='title' type='text' />
            <FormArea name='usage' type='text' />
            <FormRow name='inventory' type='number' />
            <FormRow name='image' type='file' accept='image/*' />
          </div>
          <div className='btn-container'>
            <button type='button' className='btn  clear-btn'>
              Clear
            </button>
            <button type='submit' className='btn submit-btn'>
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .form {
    background: var(--background);
    margin: 0 auto;
    padding: 2rem 2rem;
  }
  .form-info {
    display: grid;
  }
  .btn-container {
    display: flex;
    gap: 0.5rem;
  }
  @media (min-width: 992px) {
    .form-info {
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
    }
  }
`
export default AddProduct
