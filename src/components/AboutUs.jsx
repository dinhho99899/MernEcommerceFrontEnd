import React from 'react'
import styled from 'styled-components'
import heroimg from '../assets/images/hero.png'
import Title from './Title'
const AboutUs = () => {
  return (
    <Wrapper>
      <div className='section section-center about-section'>
        <div className='img-container'>
          <img src={heroimg} alt='aboutus' className='about-img'></img>
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
  .about-img {
    max-width: 550px;
    margin: 0 auto;
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
