import React from 'react'
import styled from 'styled-components'
import Product from './Product'
const ListProducts = ({ products = [] }) => {
  return (
    <Wrapper>
      <div className='products'>
        {products.map((product) => {
          return (
            <Product product={product} extraclass='list' key={product.id} />
          )
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .products {
    padding: 1rem 0;
    display: grid;
    gap: 0.8rem;
  }
  @media (min-width: 992px) {
    .products {
      width: 85%;
      margin: 0 auto;
    }
    .list {
      display: grid;
      grid-template-columns: 400px 1fr;
      gap: 1rem;
      padding: 1rem 1rem;
    }
  }
`
export default ListProducts
