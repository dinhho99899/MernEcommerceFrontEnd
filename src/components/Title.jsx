import React from 'react'
import styled from 'styled-components'
const Title = ({ title, center }) => {
  return (
    <Wrapper className={center}>
      <span className='title'>{title}</span>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .title {
    color: var(--primary500);
    font-size: 1.1rem;
    background: var(--primary100);
    padding: 0 1rem;
    border-radius: 1.25rem;
  }
`
export default Title
