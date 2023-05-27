import React from 'react'
import styled from 'styled-components'
import xx from '../assets/images/blog1.png'
import Stars from './Stars'
import moment from 'moment'
const Comment = ({ _id: id, rating, title, comment, createdAt, user = {} }) => {
  const date = moment(createdAt).format('DD-MM-YYYY')
  return (
    <Wrapper>
      <div className='header'>
        <img src={xx} alt='a' className='avatar' />
        <p>
          <span className='author'>{user?.name} </span>
          <span>&#183; {date}</span>
        </p>
        <Stars extraClass='flex-right' numbers={rating} />
      </div>
      <div className='content'>
        {title.length > 100 ? (
          <p>{`${title.substring(0, 100)}...`}</p>
        ) : (
          <p>{comment}</p>
        )}
        {comment.length > 200 ? (
          <p>{comment.substring(0, 200)}</p>
        ) : (
          <p>{comment}</p>
        )}
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
