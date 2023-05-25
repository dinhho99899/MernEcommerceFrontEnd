import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AiOutlineMenu } from 'react-icons/ai'
import { links } from '../utils/links'
import { NavLink } from 'react-router-dom'
import { BsFillMoonStarsFill, BsSun, BsCart2 } from 'react-icons/bs'
import { Logo, UserInfo } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../features/products/productsSlice'
import { toggleCartModal } from '../features/cart/CartSlice'
const Navbar = () => {
  const dispatch = useDispatch()
  const { total_items } = useSelector((store) => store.cart)
  const getLocalStorageTheme = () => {
    let theme = localStorage.getItem('theme')
    if (theme) {
      theme = JSON.parse(localStorage.getItem('theme'))
    } else {
      theme = 'light-theme'
    }
    return theme
  }
  const [theme, setTheme] = useState(getLocalStorageTheme())
  const toggleTheme = () => {
    if (theme === 'dark-theme') {
      setTheme('light-theme')
    }
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])
  return (
    <Wrapper>
      <div className='nav-center'>
        <Logo />
        <div className='nav-links'>
          {links.map((item) => {
            const { id, text, link } = item
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
        <div className='btn-container'>
          {theme === 'dark-theme' ? (
            <button
              className='transparent-btn theme'
              type='button'
              onClick={toggleTheme}
            >
              <BsSun />
            </button>
          ) : (
            <button
              className='transparent-btn theme'
              type='button'
              onClick={toggleTheme}
            >
              <BsFillMoonStarsFill />
            </button>
          )}

          <div className='cart-btn-container'>
            <button
              className='transparent-btn'
              type='button'
              onClick={() => {
                dispatch(toggleCartModal())
              }}
            >
              <BsCart2 />
            </button>
            <span className='cart-amount'>{total_items}</span>
          </div>
          <span className='user-control'>
            <UserInfo />
          </span>
          <button
            className='transparent-btn toggle-btn'
            type='button'
            onClick={() => {
              dispatch(toggleSidebar())
            }}
          >
            <AiOutlineMenu />
          </button>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  padding-bottom: 0;
  background: var(--background);
  padding: 0.75rem 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
  .nav-center {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.3rem;
  }
  .btn-container {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
  .theme {
    font-size: 1.4rem;
    padding-top: 6px;
  }
  .cart-btn-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--background-grey3);
    padding: 0 1rem;
    border-radius: 1rem;
    min-width: 110px;
  }
  .cart-amount {
    background: var(--background-grey1);
    color: var(--primary500);
    padding: 0 0.5rem;
    font-size: 1.1rem;
    border-radius: 0.5rem;
  }

  .login-container {
    display: none;
  }
  .register-btn {
    align-items: center;
    color: var(--white);
  }
  .nav-links {
    display: none;
  }

  .user-control {
    display: none;
  }
  @media (min-width: 992px) {
    .toggle-btn {
      display: none;
    }
    .login-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .user-control {
      display: block;
    }

    .active {
      color: var(--primary500);
    }
    .nav-links {
      display: flex;
      justify-content: space-around;
      gap: 2rem;
    }
    .link {
      color: var(--text-color);
    }
    .link:hover {
      color: var(--primary500);
    }
  }
`
export default Navbar
