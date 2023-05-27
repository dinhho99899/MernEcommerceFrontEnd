import { useEffect } from 'react'
import styled from 'styled-components'
import { getAllProductsByAdmin } from '../features/products/productsSlice'

import {
  Breadscums,
  Title,
  ListProducts,
  Products,
  ProductsHeader,
  GridViewProducts,
  FormRow,
  Loading,
} from '../components'
import { useDispatch, useSelector } from 'react-redux'

const AllProductsPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProductsByAdmin())
  }, [])
  const { all_products } = useSelector((store) => store.products)
  return (
    <Wrapper>
      <div className='section-center95'>
        <Breadscums center='products' />
        <div className='products-section'>
          <div className='center'>
            <Title title='All Products' />
          </div>
          <div className='products-container'>
            <div className='filters'>
              <FormRow name='search' />
              <div className='product-name'>
                <label>Name</label>
                <p> Hanh nhan</p>
                <p>Bi xanh</p>
                <p>Hat dieu</p>
                <p>Maccadamia</p>
                <p>Yen mach</p>
              </div>

              <input type='range' />
              <button className='btn'>Clear Filters</button>
            </div>
            <div>
              <ProductsHeader />
              <GridViewProducts products={all_products} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 2rem 0;
  min-height: calc(100vh - 4.5rem);
  background: var(--background-grey1);
  .products-section {
    padding: 1rem 0;
  }
  .center {
    text-align: center;
    padding-bottom: 1rem;
  }
  .products-container {
    display: grid;
    gap: 1.5rem;
  }
  .section-center95 {
    width: 90vw;
    margin: 0 auto;
    max-width: 1250px;
  }
  .product-name {
    display: grid;
  }
  .filters {
    display: grid;
    gap: 1rem;
    align-content: start;
    display: none;
  }
  input {
    max-width: 200px;
  }
  .btn {
    justify-self: left;
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
  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: 200px 1fr;
      gap: 1rem;
      padding-top: 0.5rem;
    }
    .filters {
      display: grid;
      gap: 1rem;
      align-content: start;
    }
  }
`
export default AllProductsPage
