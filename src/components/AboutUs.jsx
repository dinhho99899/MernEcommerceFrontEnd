import React from 'react'
import styled from 'styled-components'
import aboutImg from '../assets/images/Photo6.png'
import aboutImg2 from '../assets/images/Photo7.png'
import Title from './Title'
const AboutUs = () => {
  return (
    <Wrapper>
      <div className='section section-center about-section'>
        <div className='img-container'>
          <span className='imgs'>
            <img src={aboutImg} alt='aboutus' className='about-img'></img>
            <img src={aboutImg2} alt='aboutus' className='about-img2'></img>
          </span>
        </div>
        <div className='about-info'>
          <Title title='About us' />
          <h3>Gain more insight into how people use your</h3>
          <p>
            With our integrated CRM, project management, collaboration and
            invoicing capabilities, you can manage every aspect of your business
            in one secure platform.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .about-section {
    display: grid;
    gap: 1.5rem;
  }
  .img-container {
    margin: 0 auto;
  }
  .imgs {
    position: relative;
  }
  .about-img {
    max-width: 550px;
    margin: 0 auto;
    position: relative;
  }
  .about-img::before {
    position: absolute;
    width: 100%;
    height: 100%;
    background: red;
    left: 1rem;
    top: 0;
    z-index: 99;
  }

  .about-img2 {
    position: absolute;
    bottom: -1.5rem;
    left: 1.5rem;
    width: 50%;
    max-width: 200px;
  }
  .about-info {
    max-width: 550px;
    display: grid;
    gap: 0.5rem;
    align-self: self-start;
  }

  @media (min-width: 992px) {
    .about-section {
      grid-template-columns: 1fr 1fr;
      justify-content: center;
    }
  }
`
export default AboutUs
