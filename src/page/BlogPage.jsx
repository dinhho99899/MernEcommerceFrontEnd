import React from 'react'
import styled from 'styled-components'
import { Blog } from '../components'
const BlogPage = () => {
  return (
    <Wrapper>
      <Blog hidebtn='btn hide' />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  min-height: calc(100vh - 18rem);
`
export default BlogPage
