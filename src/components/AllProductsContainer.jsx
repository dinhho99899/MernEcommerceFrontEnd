import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getAllProductsByAdmin } from '../features/products/productsSlice'
import { FiltersContainer, GridViewProducts, Panigate } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { panigate } from '../utils/helpers'
const AllProductsContainer = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProductsByAdmin())
  }, [])
  const { filteredProducts } = useSelector((store) => store.products)
  const pages = panigate(filteredProducts)
  const [activeIndex, setIndex] = useState(0)
  const filtered = pages[activeIndex]
  const handlePage = (value) => {
    if (value === 'previous') {
      setIndex((old) => {
        let newIndex = old - 1
        if (newIndex < 0) {
          newIndex = pages.length - 1
        }
        return newIndex
      })
      return
    }
    if (value === 'next') {
      setIndex((old) => {
        let newIndex = old + 1
        if (newIndex > pages.length - 1) {
          newIndex = 0
        }
        return newIndex
      })
    }
  }

  return (
    <Wrapper>
      <FiltersContainer counts={filteredProducts.length} />
      <GridViewProducts products={filtered} />
      <Panigate
        pages={pages}
        handlePage={handlePage}
        activeIndex={activeIndex}
        setIndex={setIndex}
      />
    </Wrapper>
  )
}
const Wrapper = styled.div`
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
export default AllProductsContainer
