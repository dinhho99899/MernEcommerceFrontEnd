import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Title from './Title'

import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import { quotes } from '../utils/links'
const Testimonials = () => {
  const [activeIndex, setIndex] = useState(2)
  const activeQuote = quotes[activeIndex]
  const { id, quote, avatar, name, position } = activeQuote
  useEffect(() => {
    const setId = setInterval(() => {
      setIndex((old) => {
        let newIndex = old + 1
        if (newIndex >= quotes.length) {
          newIndex = 0
        }
        return newIndex
      })
    }, 3000)
    return () => {
      clearInterval(setId)
    }
  }, [])
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
              {quote}
              <span className='quote1'>
                <ImQuotesLeft />
              </span>
              <span className='quote2'>
                <ImQuotesRight />
              </span>
            </h4>
            <img src={avatar} alt='l' className='avatar-img'></img>
            <h4>{name}</h4>
            <p>{position}</p>
            <div className='btn-container'>
              {quotes.map((item, index) => {
                return (
                  <div
                    className={
                      index === activeIndex ? 'next-btn active' : 'next-btn'
                    }
                    key={index}
                    onClick={() => {
                      setIndex(index)
                    }}
                  ></div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 2rem 0;

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
    align-items: center;
    margin-top: 0.6rem;
    gap: 0.3rem;
  }

  .next-btn {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--primary500);
    transition: all 0.3s ease-out;
    cursor: pointer;
  }
  .active {
    width: 25px;
    border-radius: 0.8rem;
  }
`
export default Testimonials
