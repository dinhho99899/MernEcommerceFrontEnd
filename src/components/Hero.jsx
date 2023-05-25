import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import heroimg from '../assets/images/hero.png'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <div className='hero-section'>
        <div className='hero-info'>
          <Title title='NTV Nuts' />
          <h1 className='hero-title'>
            A small business is only as good as its tools.{' '}
          </h1>
          <div className='btn-container'>
            <a href='#products' className='btn' type='btn'>
              Shop now
            </a>
            <Link to='/register' className='hero-btn' type='button'>
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <img src={heroimg} alt='hero-img' className='hero-img' />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 2rem;
  place-items: center;
  .hero-section {
    min-height: calc(100vh - 4.5rem);
    display: grid;
    gap: 1rem;
    place-items: center;
    width: 90%;
    max-height: 2000px;
  }
  .hero-info {
    display: grid;
    gap: 0.5rem;
  }
  .btn-container {
    display: flex;
    gap: 1.2rem;
  }
  .hero-img {
    display: none;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    .hero-img {
      display: block;
    }
  }
`
export default Hero
