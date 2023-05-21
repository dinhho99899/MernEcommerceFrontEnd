import React from 'react'
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
  return (
    <Wrapper>
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
                <div className='icon-link'>{icon}</div>
                {text}
              </NavLink>
            )
          })}
        </div>
        <div className='login-container'>
          <UserInfo />
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background: var(--background);
    display: grid;
    grid-template-rows: auto 1fr 200px;
    box-shadow: var(--shadow);
    height: 0;
    overflow: hidden;
    z-index: 10;
  }
  .show-sidebar {
    padding: 1rem 1rem;
    padding-bottom: 3rem;
    height: 100%;
    min-height: 100vh;
    transition: var(--transition);
  }
  .header {
    position: relative;
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
    font-size: 1.6rem;
    padding-top: 0.35rem;
  }
  .link {
    color: var(--text-color);
    display: block;
    padding: 1rem 1rem;
    font-size: 1.2rem;
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
    .sidebar {
      display: none;
    }
  }
`
export default Sidebar
