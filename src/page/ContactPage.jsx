import React from 'react'
import styled from 'styled-components'
import { Contact } from '../components'
const ContactPage = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background: var(--background-grey1);
  min-height: calc(100vh - 4.2rem);
`
export default ContactPage
