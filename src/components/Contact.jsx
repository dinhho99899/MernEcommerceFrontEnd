import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import { HiOutlineMail } from 'react-icons/hi'
import FormRow from './FormRow'
import FormArea from './FormArea'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <Wrapper>
      <div className=' section section-center contact-section'>
        <Title title='Contact' />
        <div className='contact-header'>
          <div>
            <h3>Lets stay connected</h3>
            <p>
              It's never been easier to get in touch with Flex. Call us, use our
              live chat widget or email and we'll get back to you as soon as
              possible!
            </p>
          </div>
          <div className='btn-container'>
            <Link to='/products' className='btn'>
              Continue Shopping
            </Link>
            <Link to='/about' className='hero-btn'>
              About us
            </Link>
          </div>
          <div className='contact-info'>
            <article className='info'>
              <span className='contact-icon'>
                <HiOutlineMail />
              </span>
              <h4>Email</h4>
              <p>contact@mail.com</p>
            </article>
            <article className='info'>
              <span className='contact-icon'>
                <HiOutlineMail />
              </span>
              <h4>Email</h4>
              <p>contact@mail.com</p>
            </article>
            <article className='info'>
              <span className='contact-icon'>
                <HiOutlineMail />
              </span>
              <h4>Email</h4>
              <p>contact@mail.com</p>
            </article>
            <article className='info'>
              <span className='contact-icon'>
                <HiOutlineMail />
              </span>
              <h4>Email</h4>
              <p>contact@mail.com</p>
            </article>
          </div>
          <div className='form-container'>
            <form className='form'>
              <FormRow name='name' />
              <FormArea name='Message' />
              <button className='btn submit-btn' type='submit'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background: var(--background-grey1);
  .contact-section {
  }
  .contact-header {
    display: grid;
    gap: 1rem;
  }
  .contact-header h3 {
    padding: 0.5rem 0;
  }

  .contact-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 2rem;
  }
  .info {
    text-align: center;
  }
  .info h4 {
    margin-top: 0.6rem;
  }
  .btn-container {
    display: flex;
    gap: 0.5rem;
  }
  .contact-icon {
    font-size: 1.5rem;
    background: var(--primary500);
    padding-top: 0.6rem;
    padding-bottom: 0.15rem;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    border-radius: 50%;
  }
  .form-container {
    background: var(--background-container);
    border-radius: 0.5rem;
    padding: 2rem 2.5rem;
  }
  .submit-btn {
    width: 100%;
  }
  @media (min-width: 992px) {
    .contact-header {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .btn-container {
      justify-self: end;
    }
  }
`
export default Contact
