import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'
import { links } from '../utils/links'
const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <Wrapper>
      <div className='footer section-center'>
        <div className='logo'>
          <div>
            <Logo extra='white-text' />
          </div>
          <p className='text'>
            Launch your own Software As A Service Application with Flex
            Solutions.
          </p>
        </div>
        <div className='products'>
          <h4>Products</h4>
          <div className='nav-links'>
            {links.map((item) => {
              const { id, text, link, icon } = item
              return (
                <NavLink
                  to={link}
                  key={id}
                  className={({ isActive }) => {
                    return isActive ? 'link active' : 'link'
                  }}
                >
                  {text}
                </NavLink>
              )
            })}
          </div>
        </div>
        <div className='links'>
          <h4>Remaining</h4>
          <div className='nav-links'>
            {links.map((item) => {
              const { id, text, link, icon } = item
              return (
                <NavLink
                  to={link}
                  key={id}
                  className={({ isActive }) => {
                    return isActive ? 'link active' : 'link'
                  }}
                >
                  {text}
                </NavLink>
              )
            })}
          </div>
        </div>
        <div className='newsletter'>
          <h4>Newsletter</h4>
          <div className='newsletter-form'>
            <input type='text' className='form-row'></input>
            <button className='btn' type='button'>
              Subcribe
            </button>
          </div>
        </div>
      </div>
      <p className='copyright'>
        &copy; {currentYear} - NTV <span className='nuts'>Nuts</span>. All
        rights reserved.
      </p>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 2rem 1rem;
  padding-bottom: 0.2rem;
  text-align: center;
  background: var(--grey900);
  color: var(--white);

  .footer {
    display: grid;
    gap: 0.5rem;
  }
  .logo {
    display: flex;
    justify-content: center;
  }
  .text {
    display: none;
    color: var(--grey200);
  }
  .links {
    color: var(--grey200);
  }
  .link {
    font-size: 1rem;
    color: var(--grey200);
    margin-right: 2rem;
  }
  .link:hover {
    color: var(--primary500);
  }
  .active {
    color: var(--primary500);
  }
  .copyright {
    margin: 1rem auto;
    color: var(--grey200);
  }
  .nuts {
    color: var(--primary500);
  }
  h4 {
    display: none;
    text-align: left;
    padding-bottom: 0.8rem;
  }
  .newsletter,
  .products {
    display: none;
  }
  .newsletter-form input {
    padding: 0.4rem 0.75rem;
  }
  .btn {
    border-radius: 0;
  }
  @media (min-width: 992px) {
    .footer {
      grid-template-columns: 1fr 200px 200px 1fr;
      justify-content: center;
    }
    .logo {
      display: grid;
      justify-content: center;
      align-items: center;
    }
    .text {
      display: block;
    }
    h4 {
      display: block;
      text-align: left;
      color: var(--grey200);
    }
    .nav-links {
      display: grid;
      justify-content: left;
    }
    .link {
      text-align: left;
      padding-bottom: 0.2rem;
    }

    .products,
    .newsletter {
      display: block;
      text-align: left;
    }
  }
`
export default Footer
