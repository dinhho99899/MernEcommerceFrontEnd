import React from 'react'
import styled from 'styled-components'
import blog from '../assets/images/blog1.png'
import { useParams } from 'react-router-dom'
const SinglePostPage = () => {
  const id = window.location.href

  function CopyToClipboard(x) {
    navigator.clipboard.writeText(x)
  }
  return (
    <Wrapper>
      <div className='header'>
        <p className='author'>Dinh Ho &#183; 15 Jan 2022</p>
        <h3 className='text'>
          Our mission is to make knowledge and news accessible for everyone.
        </h3>
        <p className='text'>Dinh Ho &#183; 15 Jan 2022</p>
      </div>
      <div className='post'>
        <img src={blog} alt='b' className='img'></img>
        <div className='content section-center'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            repudiandae maiores necessitatibus culpa? Quis laboriosam nihil
            sequi in cupiditate, nulla odio ratione eligendi, excepturi quod
            amet? Iste iusto eligendi fugit. in cupiditate, nulla odio ratione
            eligendi, excepturi quod amet? Iste iusto eligendi fugit.
          </p>
          <h3>News</h3>
          <p>
            Lorem ipsum dolor sit amet consecteturadipisicing elit. Doloribus
            repudiandae maiores necessitatibus culpa? Quis laboriosam nihil
            sequi in cupiditate, nulla odio ratione eligendi, excepturi quod
            amet? Iste iusto eligendi fugit. in cupiditate, nulla odio ratione
            eligendi, excepturi quod amet? Iste iusto eligendi fugit.
          </p>
        </div>
        <div className='btn-container'>
          <button
            className='transparent-btn'
            onClick={() => {
              CopyToClipboard(id)
            }}
          ></button>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  min-height: calc(100vh - 18rem);
  .header {
    height: 400px;
    width: 100%;
    background: var(--grey900);
    text-align: center;
  }
  p {
    margin: 0 auto;
    padding: 1rem 0;
  }
  .content {
    max-width: 700px;
    margin: 0 auto;
  }
  .author {
    padding-top: 0.7rem;
    color: var(--primary500);
    margin: 0 auto;
  }
  .text {
    color: var(--white);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.4;
  }
  .post {
    position: relative;
    padding-top: calc(180px + 1rem);
  }
  .img {
    position: absolute;
    width: 95%;
    height: 360px;
    max-width: 600px;
    margin: 0 auto;
    top: -180px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`
export default SinglePostPage
