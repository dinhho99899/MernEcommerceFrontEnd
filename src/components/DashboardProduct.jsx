import React, { useState } from 'react'
import styled from 'styled-components'
import heroimg from '../assets/images/hero.png'
import { formatPrice } from '../utils/LocalStorage'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../features/products/productSlice'
const DashboardProduct = ({
  id,
  category,
  description,
  name,
  price,
  image,
  extraclass,
}) => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((store) => store.product)
  return (
    <Wrapper>
      <div className='img-container'>
        <img src={heroimg} alt={name} className='product-img'></img>
      </div>
      <div className='product-info'>
        <div className='product-header'>
          <h4>{name}</h4>
          <p className='price'>{formatPrice(price)}đ </p>
        </div>
        <p>{description}</p>
        <div className='product-footer'>
          <button className='btn' type='button'>
            Edit
          </button>
          <button
            className='btn'
            type='button'
            disabled={isLoading}
            onClick={() => {
              dispatch(deleteProduct(id))
            }}
          >
            {isLoading ? 'Deleting' : 'Delete'}
          </button>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  background: var(--white);
  border-radius: 0.5rem;
  overflow: hidden;
  .product-img {
    height: 250px;
    object-fit: cover;
  }
  .product-info {
    padding: 0.6rem 0.5rem;
    display: grid;
    gap: 0.5rem;
    grid-template-rows: auto 1fr auto;
  }
  .product-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price {
    color: #d0a129;
  }
  .product-info p {
    color: var(--grey-text);
  }
  .product-info .price {
    color: #d0a129;
  }
  .like {
    color: var(--primary500);
  }
  .product-footer {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 0.6rem;
  }
`
export default DashboardProduct
