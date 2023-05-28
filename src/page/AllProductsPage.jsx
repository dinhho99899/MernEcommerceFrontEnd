import styled from 'styled-components'
import { Breadscums, Title, AllProductsContainer } from '../components'
const AllProductsPage = () => {
  return (
    <Wrapper>
      <div className='section-center95'>
        <Breadscums center='products' />
        <div className='products-section'>
          <div className='center'>
            <Title title='All Products' />
          </div>
          <AllProductsContainer />
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 2rem 0;
  min-height: calc(100vh - 4.5rem);
  background: var(--background-grey1);
  .center {
    text-align: center;
    padding-bottom: 1rem;
  }
  .section-center95 {
    width: 90vw;
    margin: 0 auto;
    max-width: 1250px;
  }
`
export default AllProductsPage
