import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import heroimg from '../assets/images/hero.png'
const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <div className='hero-section'>
        <div className='hero-info'>
          <Title title='NTV Nuts' />
          <h1>A small business is only as good as its tools. </h1>
          <div className='btn-container'>
            <button className='btn' type='btn'>
              Shop now
            </button>
            <button className='hero-btn' type='button'>
              Sign up
            </button>
          </div>
        </div>
      </div>
      <img src={heroimg} alt='hero-img' className='hero-img' />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 1rem;
  place-items: center;
  .hero-section {
    min-height: calc(100vh - 4.5rem);
    display: grid;
    gap: 1rem;
    place-items: center;
    width: 90%;
    max-height: 2000px;
  }
  .btn-container {
    margin-top: 1rem;
    display: flex;
    gap: 1.2rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
`
export default Hero
