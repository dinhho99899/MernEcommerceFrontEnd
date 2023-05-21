import React from 'react'
import styled from 'styled-components'
import blog1 from '../assets/images/blog1.png'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
const Post = () => {
  return (
    <Wrapper>
      <img src={blog1} alt='s' className='blog-img'></img>
      <p className='author'>Dinh Ho &#183; 15 Jan 2022</p>
      <h4>
        A small business is only as good as its tools and it is totally true.
      </h4>
      <p>
        We've all experienced the chaos of multiple spreadsheets, tracking and
        insight tools...
      </p>
      <Link to='/blog/id'>
        <span className='icon-link' type='button'>
          <span>Read Post</span>
          <span className='icon'>
            <AiOutlineArrowRight />
          </span>
        </span>
      </Link>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  max-width: 500px;
  margin: 0 auto;
  .blog-img {
    height: 272px;
  }
  .author {
    padding-top: 0.7rem;
  }
  h4 {
    padding: 0.5rem 0;
    line-height: 1.3;
  }
`
export default Post
