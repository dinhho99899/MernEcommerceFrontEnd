import React from 'react'
import styled from 'styled-components'
import FormRow from './FormRow'
const NewsLetters = () => {
  return (
    <Wrapper>
      <div className='section-center newsletter-section'>
        <h3>Sign up for our newsletter</h3>
        <p className='title'>
          Stay in the loop with everything you need to know.
        </p>
        <div className='btn-container'>
          <input type='text' className='form-input' />
          <button className='btn' type='button'>
            Subcribe
          </button>
        </div>
        <p className='policy'>
          We care about your data in our <a href='#'>privacy policy</a>
        </p>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background: var(--background-grey1);
  margin: 0 auto;
  padding: 1rem 1rem;
  .newsletter-section {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
  }
  .title {
    padding: 0.5rem 0;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    max-width: 500px;
    margin: 0.3rem auto;
  }
  .form-input {
    padding: 0.395rem 0.75rem;
    border: none;
    font-size: 1rem;
  }
  .btn {
    border-radius: 0;
  }

  a {
    color: var(--primary500);
  }
`
export default NewsLetters
