import React from 'react'
import { Outlet } from 'react-router-dom'
import { BigSidebar } from '../../components'
import styled from 'styled-components'
const ShareLayoutDashboard = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <BigSidebar />
        <div className='content-section'>
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  min-height: calc(100vh - 4.5rem);
  .dashboard {
    display: grid;
    grid-template-columns: auto 1fr;
  }
  .content-section {
    background: var(--background2);
  }
  .dashboard-page {
    width: 90%;
    margin: 0 auto;
    padding: 1.5rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
  }
`
export default ShareLayoutDashboard
