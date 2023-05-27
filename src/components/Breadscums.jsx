import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Breadscums = ({ title, center }) => {
  return (
    <Wrapper className='breadcums'>
      <p>
        <Link to='/'>Home </Link>
        {center && (
          <Link to={`/${center}`} className='center'>
            / {center}
          </Link>
        )}
        {title && <span className='color'> {`/ ${title}`}</span>}
      </p>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .color {
    color: var(--primary500);
    text-transform: capitalize;
  }
  .center {
    color: var(--primary500);
    text-transform: capitalize;
  }
`

export default Breadscums
