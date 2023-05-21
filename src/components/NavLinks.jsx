import React from 'react'
import { dashboardlinks } from '../utils/links'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavLinks = () => {
  return (
    <Wrapper>
      {dashboardlinks.map((item) => {
        const { icon, text, link, id } = item
        return (
          <NavLink
            to={link}
            className={({ isActive }) => {
              return isActive ? 'icon-link active' : 'icon-link'
            }}
            key={id}
          >
            <span className='icons'>{icon}</span>
            <span className='link-text'>{text}</span>
          </NavLink>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .icon-link {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
    font-size: 1rem;
    color: var(--text-color);
    padding: 0.6rem 1.1rem;
    gap: 1rem;
  }
  .active {
    color: var(--primary500);
    background: var(--background-grey1);
  }
  .icon-link:hover {
    background: var(--background-grey1);
  }
  .icon-link:nth-child(1) .icons {
    padding-top: 4.5px;
  }
  .icon-link:nth-child(2) .icons {
    padding-top: 4.5px;
  }
  .icon-link:nth-child(3) .icons {
    padding-top: 5px;
  }
  .icon-link:nth-child(4) .icons {
    padding-top: 5px;
  }
  .icons {
    font-size: 1.5rem;
  }
  .link-text {
    display: none;
  }

  @media (min-width: 992px) {
    .link-text {
      display: block;
    }
  }
`
export default NavLinks
