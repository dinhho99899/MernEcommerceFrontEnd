import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import hero from '../assets/images/hero.png'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
const Testimonials = () => {
  return (
    <Wrapper>
      <div className='top'></div>
      <div className='center'>
        <div className='section-center testimonials'>
          <div className='title'>
            <Title title='Quotes' />
          </div>
          <div className='quotes'>
            <h4 className='content'>
              The best solution for anyone who wants to work a flexible schedule
              but still earn a full-time income.
              <span className='quote1'>
                <ImQuotesLeft />
              </span>
              <span className='quote2'>
                <ImQuotesRight />
              </span>
            </h4>
            <img src={hero} alt='l' className='avatar-img'></img>
            <h4>Dinh Ho</h4>
            <p>Designer</p>
            <div className='btn-container'>
              <div className='next-btn '></div>
              <div className='next-btn active'></div>
              <div className='next-btn'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom'></div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 1rem 0;

  p {
    text-align: center;
    margin: 0 auto;
  }
  .title {
    text-align: center;
    margin-bottom: 1rem;
  }
  .testimonials {
    text-align: center;
  }
  .content {
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
    position: relative;
  }
  .quote1 {
    position: absolute;
    top: -0.7rem;
    left: 0;
    font-size: 1.6rem;
    opacity: 0.5;
    color: var(--primary500);
  }
  .quote2 {
    font-size: 1.6rem;
    position: absolute;
    bottom: -0.7rem;
    opacity: 0.5;
    z-index: -1;
    right: 0;
    color: var(--primary500);
  }
  .avatar-img {
    margin: 1rem auto;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .btn-container {
    display: flex;
    justify-content: center;
    margin-top: 0.6rem;
    gap: 0.3rem;
  }

  .next-btn {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--primary500);
  }
  .active {
    width: 25px;
    border-radius: 0.8rem;
  }
`
export default Testimonials
