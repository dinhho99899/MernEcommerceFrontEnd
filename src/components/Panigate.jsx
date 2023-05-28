import { useEffect } from 'react'
import styled from 'styled-components'
const Panigate = ({ pages, handlePage, setIndex, activeIndex }) => {
  useEffect(() => {
    setIndex(0)
  }, [pages.length])
  return (
    <Wrapper className='btn-container'>
      <span
        className='previous'
        onClick={() => {
          handlePage('previous')
        }}
      >
        previous
      </span>
      {pages.map((item, index) => {
        return (
          <span
            className={
              activeIndex === index ? 'panigate-btn active' : 'panigate-btn '
            }
            onClick={() => {
              setIndex(index)
            }}
            key={index}
          >
            {index + 1}
          </span>
        )
      })}
      <span
        className='next'
        onClick={() => {
          handlePage('next')
        }}
      >
        next
      </span>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: black;
  gap: 0.3rem;

  .previous {
    background: var(--grey50);
    cursor: pointer;
    text-transform: capitalize;
    align-self: stretch;
    padding: 0.2rem 0.5rem;
  }
  .next {
    cursor: pointer;
    text-transform: capitalize;
    padding: 0.2rem 0.5rem;
    background: var(--grey50);
  }
  .panigate-btn {
    background: var(--grey50);
    cursor: pointer;
    padding: 0.2rem 0.75rem;
  }

  .active {
    background: var(--primary500);
    color: white;
  }
`
export default Panigate
