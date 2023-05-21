import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Breadscums = ({ title }) => {
  return (
    <Wrapper className='breadcums'>
      <p>
        <Link to='/'>Home /</Link> <span className='color'> {title}</span>
      </p>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .color {
    color: var(--primary500);
    text-transform: capitalize;
  }
`

export default Breadscums
