import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { FormRow, FormSelect, FormArea } from '../../components'
import styled from 'styled-components'
import { handleChange } from '../../features/products/productSlice'
const AddProduct = () => {
  const {
    isLoading,
    name,
    category,
    description,
    price,
    image,
    title,
    usermanual,
    info,
    company,
    featured,
    freeShipping,
    inventory,
  } = useSelector((store) => store.product)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }
  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleChange({ name, value }))
  }
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>Add Product</h3>
        <div className='form-center'>
          <div className='form-info'>
            <FormRow
              name='name'
              type='text'
              value={name}
              handleChange={handleInput}
            />
            <FormRow
              name='category'
              type='text'
              value={category}
              handleChange={handleInput}
            />
            <FormRow
              name='price'
              type='number'
              value={price}
              handleChange={handleInput}
            />
            <FormRow
              name='description'
              type='text'
              handleChange={handleInput}
            />
            <FormRow
              name='description'
              type='text'
              value={description}
              handleChange={handleInput}
            />
            <FormRow
              name='title'
              type='text'
              value={title}
              handleChange={handleInput}
            />
            <FormArea
              name='usermanual'
              labelText='user manual'
              type='text'
              value={usermanual}
              handleChange={handleInput}
            />
            <FormRow
              name='inventory'
              type='number'
              value={inventory}
              handleChange={handleInput}
            />
            <FormRow
              name='image'
              type='file'
              accept='image/*'
              value={image}
              handleChange={handleInput}
            />
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
