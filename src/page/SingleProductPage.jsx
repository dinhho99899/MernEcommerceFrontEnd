import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Breadscums } from '../components'
import { useParams } from 'react-router-dom'
import { Gallery, Stars, Title, FormSelect, Comments } from '../components'
import { Link } from 'react-router-dom'
import { getSingleProductByAdmin } from '../features/products/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
const SingleProduct = () => {
  const dispatch = useDispatch()
  const { productId: id } = useParams()
  useEffect(() => {
    dispatch(getSingleProductByAdmin(id))
  }, [id])
  const { product } = useSelector((store) => store.products)
  console.log(product)
  const {
    averageRating,
    category,
    description,
    featured,
    freeShipping,
    id: productId,
    image,
    inventory,
    price,
    name,
  } = product
  return (
    <Wrapper>
      <div className=' section-center'>
        <Breadscums title={name} />
        <div className='product-section'>
          <Gallery image={image} />
          <div className='product-info'>
            <h3>{name}</h3>
            <div className='stars'>
              <Stars numbers={averageRating} />
            </div>
            <p className='price'>{price}đ</p>
            <p>Available: {inventory > 0 ? 'In stock' : 'Out of Stock'}</p>
            <p>SKU: {productId}</p>
            <p className='brand'>Brand: NTV Nuts</p>
            <div className='underline'></div>
            <FormSelect />
            {inventory === 0 ? (
              <Link to='/products' className='btn'>
                More Products
              </Link>
            ) : (
              <button type='button' className='btn'>
                Add To Cart
              </button>
            )}
          </div>
          <div className='details'>
            <div className='title'>
              <Title title='Info' />
            </div>
            <p>{description}</p>
            <p>{description}</p>
            <p>{description}</p>
          </div>
          <div className='comments'>
            <Title title='Comments' />
            <Comments />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 2rem 0;
  min-height: calc(100vh - 18rem);
  place-items: center;
  gap: 1rem;
  background: var(--background-grey1);
  .product-section {
    display: grid;
    padding: 1rem 0;
    gap: 2rem;
  }
  .btn {
    margin-top: 1rem;
  }
  .stars {
    padding: 0.8rem 0;
  }
  .underline {
    width: 180px;
    height: 0.1rem;
    background: var(--primary500);
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  .quantity {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .quantity p {
    margin: 0;
  }
  .select {
    width: 100px;
    background: var(--color5);
    border: none;
    padding: 0.375rem 0.5rem;
  }
  .brand {
    text-transform: capitalize;
  }
  .product-info {
    background: var(--background-container);
    padding: 1rem 1rem;
    border-radius: var(--radius);
    align-self: self-start;
  }
  .details {
    background: var(--background-container);
    padding: 1rem 1rem;
    border-radius: var(--radius);
    align-self: self-start;
  }
  .comments {
    padding: 1rem 1rem;
  }
  @media screen and (min-width: 992px) {
    .product-section {
      grid-template-columns: 1.5fr 1fr;
    }
  }
`
export default SingleProduct
