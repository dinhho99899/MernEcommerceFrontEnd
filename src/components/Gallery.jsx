import React, { useState } from 'react'
import styled from 'styled-components'
import heroimg from '../assets/images/hero.png'
const Gallery = ({ images = [] }) => {
  const [index, setIndex] = useState(0)
  const mainImg = images[index]?.url

  return (
    <Wrapper className='gallery'>
      <div className='main'>
        <img src={heroimg} className='main-img' alt='main'></img>
      </div>
      <div className='btn-container'>
        <img src={heroimg} alt='img' className='img active'></img>
        <img src={heroimg} alt='img' className='img'></img>
        <img src={heroimg} alt='img' className='img'></img>
        {images?.map((image, indexx) => {
          return (
            <img
              key={indexx}
              src={heroimg}
              alt='img'
              className={index === indexx ? 'img active' : 'img'}
              onClick={() => {
                setIndex(indexx)
              }}
            ></img>
          )
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .img {
    height: 80px;
    object-fit: cover;
    border-radius: 0.4rem;
    opacity: 0.7;
    cursor: pointer;
  }
  .active {
    opacity: 1;
    border: 2px solid var(--color1);
  }
  .img:hover {
    opacity: 0.7;
  }
  .main {
    overflow: hidden;
    margin-bottom: 0.5rem;
    border-radius: 0.4rem;

    object-fit: cover;
  }
  .main-img {
    transition: var(--transition);
    height: 360px;
    cursor: pointer;
  }
  .main:hover .main-img {
    transform: scale(1.05);
  }
  .btn-container {
    display: grid;
    gap: 0.3rem;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
  @media (min-width: 768px) {
    .main-img {
      transition: var(--transition);
      height: 480px;
      cursor: pointer;
    }
  }
`
export default Gallery
