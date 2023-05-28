import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Loading, Product } from '../components'
const GridViewProducts = ({ products = [] }) => {
  const { isLoading } = useSelector((store) => store.products)
  if (isLoading)
    return (
      <div className='load'>
        <Loading />
      </div>
    )
  return (
    <Wrapper>
      <div className='products'>
        {products.map((product) => {
          return <Product {...product} product={product} key={product._id} />
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .products {
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    .products {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .products {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`
export default GridViewProducts
