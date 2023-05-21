import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <Wrapper>
      <div className='section section-center error-page'>
        <div>
          <h1>
            <span className='color'>4</span>0<span className='color'>4</span>
          </h1>
          <h2>Page not Found!!!</h2>
          <p>
            The page you are looking for doesn't exist. Please try searching for
            some other page, or return to the website's homepage to find what
            you're looking for.
          </p>
          <Link to='/' className='btn'>
            Back Home
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .error-page {
    display: grid;
    min-height: calc(100vh - 18rem);
    place-items: center;
    text-align: center;
  }
  .color {
    color: var(--primary500);
  }

  h2 {
    padding: 1rem 0;
  }

  .btn {
    margin-top: 1rem;
  }
`
export default ErrorPage
