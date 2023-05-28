import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Breadscums } from '../components'
import { useParams } from 'react-router-dom'
import {
  Gallery,
  Stars,
  Title,
  FormSelect,
  Comments,
  AddToCart,
  AmountBtns,
} from '../components'
import { Link } from 'react-router-dom'
import { getSingleProductByAdmin } from '../features/products/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
const SingleProduct = () => {
  const dispatch = useDispatch()
  const { productId: id } = useParams()
  const [amount, setAmount] = useState(1)
  const list = [0.5, 1]
  const { product } = useSelector((store) => store.products)
  useEffect(() => {
    dispatch(getSingleProductByAdmin(id))
  }, [id])
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
  const decreaseAmount = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount - 1
      if (newAmount < 1) {
        newAmount = 1
      }
      return newAmount
    })
  }
  const increaseAmount = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount + 1
      if (newAmount > inventory) {
        newAmount = inventory
      }
      return newAmount
    })
  }

  return (
    <Wrapper>
      <div className='section section-center'>
        <Breadscums center='products' title={name} />
        <div className='product-section'>
          <Gallery image={image} />
          <div className='product-info'>
            <h3>{name}</h3>
            <div className='stars'>
              <Stars numbers={averageRating} />
            </div>
            <div>
              <p className='price'>{price}đ</p>
              <p>Available: {inventory > 0 ? 'In stock' : 'Out of Stock'}</p>
              <p>SKU: {productId}</p>
              <p className='brand'>Brand: NTV Nuts</p>
            </div>

            <div className='underline'></div>
            <FormSelect list={list} unit='kg' title='Khối lượng:' />
            {inventory === 0 ? (
              <Link to='/products' className='btn'>
                More Products
              </Link>
            ) : (
              <div className='add-to-cart'>
                <AmountBtns
                  amount={amount}
                  decreaseAmount={decreaseAmount}
                  increaseAmount={increaseAmount}
                />
                <AddToCart product={product} amount={amount} />
              </div>
            )}
          </div>
          <div className='details'>
            <div>
              <Title title='Info' />
            </div>
            <div className='details-info'>
              <p>{description}</p>
              <p>{description}</p>
              <p>{description}</p>
            </div>
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
  min-height: calc(100vh - 18rem);
  place-items: center;
  gap: 1rem;
  background: var(--background-grey1);
  .product-section {
    display: grid;
    padding: 1rem 0;
    gap: 2rem;
  }
  .product-info {
    display: grid;
    gap: 0.5rem;
  }
  .underline {
    width: 180px;
    height: 0.1rem;
    background: var(--primary500);
    margin-bottom: 1rem;
    margin-top: 1rem;
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
    display: grid;
    gap: 0.5rem;
  }
  .add-to-cart {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .comments {
    padding: 1rem 1rem;
    display: grid;
    gap: 0.5rem;
  }
  @media screen and (min-width: 992px) {
    .product-section {
      grid-template-columns: 1.5fr 1fr;
    }
  }
`
export default SingleProduct
