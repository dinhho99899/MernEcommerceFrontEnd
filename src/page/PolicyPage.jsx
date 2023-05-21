import React from 'react'
import styled from 'styled-components'
import { Policy } from '../components'
const PolicyPage = () => {
  return (
    <Wrapper>
      <Policy />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  min-height: 100vh;
  background: var(--background2);
`
export default PolicyPage
