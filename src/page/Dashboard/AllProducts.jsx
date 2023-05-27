import { useEffect } from 'react'
import { SearchContainer } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { getUserProducts } from '../../features/products/productsSlice'
import { Loading, DashboardProduct } from '../../components'
import styled from 'styled-components'
const AllProducts = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserProducts())
  }, [])
  const { all_products, isLoading } = useSelector((store) => store.products)
  if (isLoading) return <Loading center />

  return (
    <Wrapper>
      <h3>All Products</h3>
      <SearchContainer />
      <div className='products-section'>
        {all_products.map((product, index) => {
          return <DashboardProduct {...product} key={index} />
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  padding: 2rem 2rem;
  background: var(--background);
  .products-section {
    padding-top: 1rem;
    display: grid;
    grid-gap: 1rem;
  }

  @media (min-width: 992px) {
    .products-section {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`
export default AllProducts
