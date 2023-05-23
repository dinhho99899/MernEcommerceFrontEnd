import React from 'react'
import { Product } from '../components'
import styled from 'styled-components'
const JobsContainer = ({ products = [] }) => {
  return (
    <Wrapper>
      {products.map((product, index) => {
        return <Product {...product} key={index} />
      })}
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 1rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1268px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
export default JobsContainer
