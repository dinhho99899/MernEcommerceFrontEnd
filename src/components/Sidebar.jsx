import React, { useRef } from 'react'
import styled from 'styled-components'
import { Logo, UserInfo } from '../components'
import { NavLink } from 'react-router-dom'
import { links } from '../utils/links'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../features/products/productsSlice'
const Sidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.products)
  const dispatch = useDispatch()
  const toggle = () => {
    dispatch(toggleSidebar())
  }
  const outsideToggle = (e) => {
    if (e.target.classList.contains('modal')) {
      toggle()
      return
    }
  }
  return (
    <Wrapper className='modal' onClick={outsideToggle}>
      <div className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <div className='header'>
          <Logo toggle={toggle} />
          <button className='close-btn' onClick={toggle}>
            <AiOutlineClose />
          </button>
        </div>
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
                onClick={toggle}
              >
                <span className='icon-link'>{icon}</span>
                {text}
              </NavLink>
            )
          })}
        </div>
        <div className='login-container'>
          <UserInfo toggle={toggle} />
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 99;
  display: grid;
  place-items: center;

  .sidebar {
    height: 90%;
    width: 80%;
    padding: 1rem 1rem;
    box-shadow: var(--light-shadow);
    background: var(--background-grey1);
    display: grid;
    grid-template-rows: auto auto 1fr;
    position: relative;
    gap: 0.5rem;
    border-radius: 0.5rem;
  }

  .close-btn {
    position: absolute;
    font-size: 1.6rem;
    color: var(--first-color);
    font-weight: bold;
    background: transparent;
    border: none;
    top: 0.5rem;
    right: 0.8rem;
    cursor: pointer;
  }
  .close-btn:hover {
    color: var(--first-color-alt);
    transform: scale(1.4);
    transition: var(--transition);
  }
  .icon-link {
    font-size: 1.4rem;
  }
  .link {
    color: var(--text-color);
    display: block;
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    transition: var(--transition);
  }
  .link:hover {
    background: var(--background-grey3);
  }
  .active {
    color: var(--first-color);
  }
  .login-container {
    display: flex;
    align-items: center;
    justify-self: center;
    gap: 1rem;
  }
  @media (min-width: 992px) {
    display: none;
  }
`
export default Sidebar
