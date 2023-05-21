import React from 'react'
import styled from 'styled-components'
const OnePolicy = () => {
  return (
    <Wrapper>
      <div className='header'>
        <h4>Our mission is to make knowledge and news</h4>
        <span>+</span>
      </div>
      <p className='content'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime,
        modi ex veritatis doloribus ipsum, omnis quae ipsam non deleniti commodi
        vitae optio rerum aliquam quidem nisi ullam placeat enim!
      </p>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  padding: 1rem 1rem;
  max-width: 700px;
  background: var(--background-container);
  margin: 0 auto;
  border-radius: var(--radius);
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
  .content {
    padding-top: 1rem;
    text-align: left;
    padding: 1rem 0.5rem;
  }
`
export default OnePolicy
