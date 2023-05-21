import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import Post from './Post'
const Blog = ({ hidebtn }) => {
  return (
    <Wrapper>
      <div className='section section-center'>
        <div className='blog-title'>
          <Title title='Blog' />
          <button className={hidebtn ? hidebtn : 'btn'} type='button'>
            View all posts
          </button>
        </div>
        <h3 className='padding'>Blog posts</h3>
        <p>
          With our integrated CRM, project management, collaboration and
          invoicing capabilities, you can manage your business in one secure
          platform.
        </p>
        <div className='posts'>
          <Post />
          <Post /> <Post /> <Post />
          <Post />
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .blog-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .posts {
    padding: 1.5rem 0;
    display: grid;
    justify-content: center;
    gap: 1.6rem;
  }
  .hide {
    display: none;
  }
  @media (min-width: 768px) {
    .posts {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .posts {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`
export default Blog
