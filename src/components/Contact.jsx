import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import { HiOutlineMail } from 'react-icons/hi'
import { AiFillFacebook, AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { SiZalo } from 'react-icons/si'
import FormRow from './FormRow'
import FormArea from './FormArea'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <Wrapper>
      <div className=' section section-center contact-section'>
        <Title title='Liên hệ' />
        <div className='contact-header'>
          <div>
            <h3>Hãy giữ liên hệ với nhau</h3>
            <p>
              Không thể dễ dàng hơn để liên kết với NTVNuts bây giờ. Gọi ngay
              cho chúng tôi. Bạn có thể sử dụng live chat hoặc email. Chúng tôi
              sẽ liên hệ cho bạn sớm nhất có thể!
            </p>
          </div>
          <div className='btn-container'>
            <Link to='/products' className='btn'>
              Shopping
            </Link>
            <Link to='/about' className='hero-btn'>
              Về chúng tôi
            </Link>
          </div>
          <div className='contact-info'>
            <article className='info'>
              <span className='contact-icon'>
                <AiOutlineMail />
              </span>
              <h4>Email</h4>
              <p>quahatkhontv@gmail.com</p>
            </article>
            <article className='info'>
              <span className='contact-icon'>
                <AiFillPhone />
              </span>
              <h4>Phone</h4>
              <p>0764024462</p>
            </article>
            <article className='info'>
              <span className='contact-icon zalo'>
                <SiZalo />
              </span>
              <h4>Zalo</h4>
              <p>0837139604</p>
            </article>
            <article className='info'>
              <span className='contact-icon'>
                <AiFillFacebook />
              </span>
              <h4>Facebook</h4>
              <Link>https://www.facebook.com/ntvnuts</Link>
            </article>
          </div>
          <div className='form-container'>
            <form className='form'>
              <FormRow name='Tên liên hệ' />
              <FormArea name='Tin nhắn' />
              <button className='btn submit-btn' type='submit'>
                Gửi
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
  .contact-icon {
    color: white;
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
