import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import NavLinks from './NavLinks'
import { AiOutlineLeft } from 'react-icons/ai'
const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user)
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? 'sidebar-container '
            : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  display: block;
  padding: 1rem 0rem;
  .sidebar-container {
    min-height: calc(100vh - 4.2rem);
    height: 100%;
    transition: var(--transition);
  }
  .sidebar-container {
    height: 100%;
    transition: var(--transition);
  }
  .content {
    position: sticky;
    top: 5.5rem;
  }

  @media (min-width: 992px) {
    padding: 1rem 1rem;
    .sidebar-container {
      min-height: 100vh;
      height: 100%;

      margin-left: -250px;
      transition: var(--transition);
    }

    .show-sidebar {
      margin-left: 0;
    }

    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }
    .active {
      color: var(--grey-900);
    }
    .active .icon {
      color: var(--primary-500);
    }
  }
`
export default BigSidebar
