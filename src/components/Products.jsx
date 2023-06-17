import React from 'react'
import styled from 'styled-components'
import { Title, GridViewProducts } from '../components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Products = () => {
  const { featuredProducts } = useSelector((store) => store.products)
  console.log(featuredProducts)
  return (
    <Wrapper id='products'>
      <div className='section-center section'>
        <div className='title-container'>
          <Title title='Featured Products' />
          <h3>Gain more insight into how people use your</h3>
          <p className='center'>
            With our integrated CRM, project management, collaboration and
            invoicing capabilities, you can manage every aspect of your business
            in one secure platform.
          </p>
        </div>
        <div className='products-section'>
          <div className='products-container'>
            <GridViewProducts products={featuredProducts} />
          </div>
        </div>
        <Link to='/products' className='btn'>
          All Products
        </Link>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background: var(--background-grey1);
  text-align: center;
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
