import React from 'react'
import styled from 'styled-components'
import { Title, OnePolicy } from '../components'

const Policy = () => {
  return (
    <Wrapper>
      <div className='section section-center'>
        <div className='blog-title'>
          <Title title='Policy' center='center' />
        </div>
        <h3 className='padding'>Blog posts</h3>
        <p>
          With our integrated CRM, project management, collaboration and
          invoicing capabilities, you can manage your business in one secure
          platform.
        </p>
        <div className='policy-content'>
          <OnePolicy />
          <OnePolicy />
          <OnePolicy />
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  text-align: center;
  .blog-title {
  }
  p {
    margin: 0 auto;
  }
  .blog-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.5rem 0;
  }
  .policy-content {
    padding: 2rem 0;
    display: grid;
    gap: 2rem;
  }
`
export default Policy
