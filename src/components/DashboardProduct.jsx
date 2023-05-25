import React, { useState } from 'react'
import styled from 'styled-components'
import heroimg from '../assets/images/hero.png'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { AddToCart } from '../components'
import { formatPrice } from '../utils/LocalStorage'
const DashboardProduct = ({ product = {} }) => {
  const [like, setLike] = useState(false)
  const { _id, category, description, name, price, image, extraclass } = product
  return (
    <Wrapper className={extraclass}>
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
          <button className='btn' type='button'>
            Delete
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