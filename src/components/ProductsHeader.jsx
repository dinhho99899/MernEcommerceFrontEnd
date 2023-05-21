import React from 'react'
import styled from 'styled-components'
import { BsFillGridFill } from 'react-icons/bs'
import { FaListUl } from 'react-icons/fa'
import FormSelect from './FormSelect'
import { useDispatch } from 'react-redux'
import { toggleListView } from '../features/products/productsSlice'
const ProductsHeader = ({ counts }) => {
  const dispatch = useDispatch()
  return (
    <Wrapper className='header'>
      <div className='title'>
        <h4>Products</h4>
      </div>
      <div className='btn-container'>
        <button className='category-btn active '>
          <div className='inner-btn'>
            <h4>All</h4>
            <p className='category-text'>
              Lorem ipsum dolor sit, amet consectetur adipisicing
            </p>
          </div>
        </button>
        <button className='category-btn'>
          <div className='inner-btn'>
            <h4>All</h4>
            <p className='category-text'>
              Lorem ipsum dolor sit, amet consectetur adipisicing
            </p>
          </div>
        </button>
        <button className='category-btn'>
          <div className='inner-btn'>
            <h4>All</h4>
            <p className='category-text'>
              Lorem ipsum dolor sit, amet consectetur adipisicing
            </p>
          </div>
        </button>
        <button className='category-btn'>
          <div className='inner-btn'>
            <h4>All</h4>
            <p className='category-text'>
              Lorem ipsum dolor sit, amet consectetur adipisicing
            </p>
          </div>
        </button>
      </div>

      <div className='sort-container'>
        <p>
          Showing <span className='number'>{counts}</span> products
        </p>
        <div className='view-sort-container'>
          <div className='view'>
            <button
              className='transparent-btn'
              onClick={() => {
                dispatch(toggleListView())
              }}
            >
              <FaListUl />
            </button>
            <button
              className='transparent-btn'
              onClick={() => {
                dispatch(toggleListView())
              }}
            >
              <BsFillGridFill />
            </button>
          </div>
          <FormSelect />
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  .btn-container {
    display: flex;
    justify-content: space-around;
    border-radius: 1rem;
    overflow: hidden;
  }

  .category-btn {
    width: 100%;
    text-align: left;
    padding: 1rem 1rem;
    padding-left: 1rem;
    padding-right: 0;
    background: var(--white);
    border: none;
    cursor: pointer;
  }
  .active {
    border-bottom: 3px solid var(--primary500);
  }
  .inner-btn {
    border-right: 1px solid var(--primary400);
  }
  .inner-btn p {
    color: var(--grey-text);
  }

  p {
    padding: 0;
    margin: 0;
  }
  .sort-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .transparent-btn {
    margin-right: 0.5rem;
  }
  .number {
    color: var(--primary500);
  }
  .view-sort-container {
    display: flex;
    gap: 1rem;
  }
  .view {
    border-right: 1px solid var(--primary500);
    padding: 0 0.5rem;
    display: none;
  }
  .category-text {
    display: none;
  }

  @media (min-width: 992px) {
    .category-text {
      display: block;
    }
    .view {
      display: block;
    }
  }
`
export default ProductsHeader
