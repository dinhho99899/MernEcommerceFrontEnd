import React from 'react'
import styled from 'styled-components'
import avatar from '../assets/images/blog1.png'
import Stars from './Stars'
const Comment = () => {
  return (
    <Wrapper>
      <div className='header'>
        <img src={avatar} alt='a' className='avatar' />
        <p>
          <span className='author'>Dinh Ho </span>
          <span>&#183; 15 Jan 2022</span>
        </p>
        <Stars extraClass='flex-right' numbers='5' />
      </div>
      <div className='content'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique
          aliquam veniam! Explicabo blanditiis sapiente harum incidunt fugit
          eaque quod sequi quae autem sint qui laudantium, unde nam, praesentium
          esse!
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .header {
    display: grid;
    align-items: center;
    gap: 1rem;
    grid-template-columns: auto auto 1fr;
  }
  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .author {
    font-weight: bold;
    text-transform: capitalize;
  }
  .content {
    padding-top: 0.3rem;
  }
  .flex-right {
    justify-self: right;
  }
`
export default Comment
