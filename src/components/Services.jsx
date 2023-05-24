import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import heroimg from '../assets/images/hero.png'
import { GoMailRead } from 'react-icons/go'
const Services = () => {
  return (
    <Wrapper>
      <div className='services-section section section-center'>
        <div className='service-header'>
          <Title title='Services' />
          <h3>Gain more insight into how people use your</h3>
          <p>
            With our integrated CRM, project management, collaboration and
            invoicing capabilities, you can manage every aspect of your business
            in one secure platform.
          </p>
        </div>
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
  .service-header {
    display: grid;
    gap: 0.5rem;
    padding-bottom: 1rem;
  }
  .services-section p {
    margin: 0 auto;
  }
  .service {
    text-align: center;
    width: 90%;
    margin: 0 auto;
    padding: 2rem 2rem;
  }
  .service:hover {
    cursor: pointer;
    box-shadow: 0px 0px 1px 1px var(--background-grey2);
    transition: var(--transition);
  }
  .service-icon {
    font-size: 2rem;
    background: var(--primary500);
    border: none;
    color: var(--white);
    padding-top: 0.4rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .services-img {
    display: none;
    height: 90%;
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
