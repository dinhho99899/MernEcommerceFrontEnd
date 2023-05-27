import React from 'react'
import styled from 'styled-components'
import { Title, GridViewProducts } from '../components'

import { useSelector } from 'react-redux'
const Products = () => {
  const { all_products } = useSelector((store) => store.products)
  return (
    <Wrapper id='products'>
      <div className='section-center section'>
        <div className='title-container'>
          <Title title='Our Products' />
          <h3>Gain more insight into how people use your</h3>
          <p className='center'>
            With our integrated CRM, project management, collaboration and
            invoicing capabilities, you can manage every aspect of your business
            in one secure platform.
          </p>
        </div>
        <div className='products-section'>
          <div className='products-container'>
            <GridViewProducts products={all_products} />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background: var(--background-grey1);
  .title-container {
    display: grid;
    gap: 0.5rem;
    text-align: center;
  }
  .products-section {
    display: grid;
  }
`
export default Products
