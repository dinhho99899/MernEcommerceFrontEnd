import React from 'react'
import styled from 'styled-components'
import FormArea from './FormArea'
import Stars from './Stars'
import Comment from './Comment'
const Comments = () => {
  return (
    <Wrapper>
      <div className='form'>
        <Stars />
        <FormArea />
        <div className='submit-container'>
          <button className='btn'>Send</button>
        </div>
        <hr />
        <div className='comments-container'>
          <Comment />
          <Comment />
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  padding-top: 1rem;

  .submit-container {
    text-align: right;
  }
  hr {
    margin: 1rem 0;
  }
  .comments-container {
    display: grid;
    gap: 1rem;
  }
`
export default Comments
