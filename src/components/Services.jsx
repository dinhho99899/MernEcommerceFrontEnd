import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import heroimg from '../assets/images/hero.png'
import { GoMailRead } from 'react-icons/go'
const Services = () => {
  return (
    <Wrapper>
      <div className='services-section section section-center'>
        <Title title='Services' />
        <h3>Gain more insight into how people use your</h3>
        <p>
          With our integrated CRM, project management, collaboration and
          invoicing capabilities, you can manage every aspect of your business
          in one secure platform.
        </p>
        <div className='services-container'>
          <div>
            <article className='service'>
              <span className='service-icon'>
                <GoMailRead />
              </span>
              <h4>Measure your performance</h4>
              <p>
                Stay connected with your team and make quick decisions wherever
                you are.
              </p>
            </article>
            <article className='service'>
              <span className='service-icon'>
                <GoMailRead />
              </span>
              <h4>Measure your performance</h4>
              <p>
                Stay connected with your team and make quick decisions wherever
                you are.
              </p>
            </article>
          </div>
          <img src={heroimg} alt='services' className='services-img'></img>
          <div>
            <article className='service'>
              <span className='service-icon'>
                <GoMailRead />
              </span>
              <h4>Measure your performance</h4>
              <p>
                Stay connected with your team and make quick decisions wherever
                you are.
              </p>
            </article>
            <article className='service'>
              <span className='service-icon'>
                <GoMailRead />
              </span>
              <h4>Measure your performance</h4>
              <p>
                Stay connected with your team and make quick decisions wherever
                you are.
              </p>
            </article>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background: var(--background-grey1);
  text-align: center;
  .services-section {
    text-align: center;
  }
  .services-section p {
    margin: 0 auto;
    padding: 0.6rem 0;
  }
  .services-container {
    padding-top: 1rem;
  }

  .service {
    text-align: center;
    width: 90%;
    margin: 0 auto;
    padding: 2rem 2rem;
  }

  .service-icon {
    font-size: 2rem;
    background: var(--primary500);
    border: none;
    color: var(--white);
    padding-top: 0.35rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .services-img {
    display: none;
  }
  h4 {
    margin-top: 1rem;
  }

  @media (min-width: 992px) {
    .services-img {
      display: block;
    }
    .services-container {
      display: grid;
      grid-template-columns: 1fr 250px 1fr;
      justify-content: center;
      align-items: center;
    }
  }
`
export default Services
