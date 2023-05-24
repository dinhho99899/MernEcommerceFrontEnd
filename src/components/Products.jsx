import React from 'react'
import styled from 'styled-components'
import GridViewProducts from './GridViewProducts'
import ListProducts from './ListProducts'
import Title from './Title'
import ProductsHeader from './ProductsHeader'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import { useSelector } from 'react-redux'
const Products = () => {
  const { isListView, isLoading, all_products, counts } = useSelector(
    (store) => store.products
  )
  if (isLoading)
    return (
      <Wrapper>
        <div className='section-center'>
          <p>Loading...</p>
        </div>
      </Wrapper>
    )
  return (
    <Wrapper id='products'>
      <div className='section-center '>
        <div className='title-container'>
          <Title title='Our Products' />
        </div>
        <div className='products-section'>
          <div className='products-container'>
            <ProductsHeader counts={counts} />
            {isListView ? (
              <GridViewProducts products={all_products} />
            ) : (
              <ListProducts products={all_products} />
            )}
            <div className='btn-container'>
              <span className='link previous'>
                <AiOutlineLeft />
              </span>
              <span className='link panigation-btn active'>1</span>
              <span className='link panigation-btn'>2</span>
              <span className='link next'>
                <AiOutlineRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background: var(--background-grey1);
  padding: 1rem 0;
  .title-container {
    text-align: center;
  }
  .products-section {
    display: grid;
  }
  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .previous {
    border-top-left-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
    padding: 0 0.8rem;
    padding-top: 0.65rem;
    padding-bottom: 0.35rem;
    background: var(--white);
    cursor: pointer;
  }
  .next {
    border-top-right-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
    padding: 0 0.8rem;
    padding-top: 0.65rem;
    padding-bottom: 0.35rem;
    background: var(--white);
    cursor: pointer;
  }
  .panigation-btn {
    padding: 0.5rem 1.3rem;
    background: var(--white);
    cursor: pointer;
  }

  .active {
    background: var(--grey200);
  }
`
export default Products
