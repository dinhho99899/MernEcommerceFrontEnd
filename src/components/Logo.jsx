import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
const Logo = ({ toggle, extra }) => {
  return (
    <Wrapper>
      <Link to='/' onClick={toggle}>
        <img src={logo} alt='ntvnuts' className='nav-logo'></img>
      </Link>
      <h3 className='logo-text'>
        <span className={extra}>NTV</span>
        <span className='brand'>Nuts</span>
      </h3>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
  justify-content: center;
  .nav-logo {
    height: 48px;
    width: 48px;
  }
  .nav-logo:hover {
    opacity: 0.7;
  }
  .brand {
    color: var(--primary500);
    margin-left: 0.2rem;
  }
  .logo-text {
    font-size: 1.15rem;
  }
  .white-text {
    color: white;
  }
`
export default Logo
