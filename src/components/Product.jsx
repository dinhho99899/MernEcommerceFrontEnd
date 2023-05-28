import { useState } from 'react'
import styled from 'styled-components'
import blog1 from '../assets/images/blog1.png'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { AddToCart } from '.'
import { formatPrice } from '../utils/LocalStorage'
const Product = ({
  _id,
  category,
  description,
  name,
  price,
  image,
  company,
  extraclass,
  product,
}) => {
  const [like, setLike] = useState(false)
  let amount = 1
  return (
    <Wrapper>
      <div className='img-container'>
        <img src={blog1} alt='s' className='blog-img'></img>
        <div className='absolute'>
          <div className='btn-c'>
            {like ? (
              <button
                className='grey-btn like'
                type='button'
                onClick={() => {
                  setLike(!like)
                }}
              >
                <FaHeart />
              </button>
            ) : (
              <button
                className='grey-btn '
                type='button'
                onClick={() => {
                  setLike(!like)
                }}
              >
                <FaRegHeart />
              </button>
            )}
            <AddToCart product={product} amount={amount} />
          </div>
        </div>
      </div>
      <div className='product-info'>
        <p className='author'>
          {category} &#183; <span className='company'>{company}</span>
        </p>
        <div className='product-header'>
          <h4>{name}</h4>
          <p className='price'>{formatPrice(price)}đ </p>
        </div>
        <p className='description'>
          {description.length > 200
            ? `${description.substring(0, 200)}...`
            : description}
        </p>
        <Link to={`/products/${_id}`} className='link'>
          <span className='icon-link' type='button'>
            <span>Read More</span>
            <span className='icon'>
              <AiOutlineArrowRight />
            </span>
          </span>
        </Link>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  border-radius: 0.5rem;
  background: var(--white);
  display: grid;
  grid-template-rows: auto 1fr;
  color: var(--grey-text);
  :hover {
    transform: scale(1.01);
    transition: var(--transition);
  }
  .img-container {
    position: relative;
  }
  h4 {
    color: var(--grey-text);
  }
  .absolute {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    place-items: center;
    display: none;
    border-radius: 0.5rem;
  }
  .btn-c {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .img-container:hover .absolute {
    display: grid;
    transition: var(--transition);
  }
  .blog-img {
    height: 272px;
  }
  .product-info {
    padding: 0rem 0.7rem;
    padding-bottom: 0.5rem;
    display: grid;
    grid-template-rows: auto auto 1fr auto;
  }
  .author {
    padding-top: 0.7rem;
  }
  .company {
    text-transform: capitalize;
  }
  h4 {
    padding: 0.5rem 0;
    line-height: 1.3;
  }
  .product-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .link {
    justify-self: left;
  }
  .price {
    color: #d0a129;
  }
`
export default Product
