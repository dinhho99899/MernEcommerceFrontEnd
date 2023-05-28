import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BsFillGridFill } from 'react-icons/bs'
import { FaListUl } from 'react-icons/fa'
import {
  filtersProducts,
  sortProducts,
} from '../features/products/productsSlice'
import { FormRowX, FormSelectX } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import {
  toggleListView,
  handleSort,
  clearFilters,
  handleFilters,
} from '../features/products/productsSlice'
import { getUniqueValues } from '../utils/helpers'
const FiltersContainer = ({ counts }) => {
  const dispatch = useDispatch()
  const { all_products } = useSelector((store) => store.products)
  const categories = getUniqueValues(all_products, 'category')

  const {
    sort,
    sortTypes,
    filters,
    filters: { search, allTypes, type, category },
  } = useSelector((store) => store.products)
  useEffect(() => {
    dispatch(sortProducts())
  }, [sort])
  useEffect(() => {
    dispatch(filtersProducts())
  }, [filters])

  const handleSortInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleSort({ name, value }))
  }
  const handleFiltersInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleFilters({ name, value }))
  }
  return (
    <Wrapper>
      <div className='btn-container'>
        {categories.map((item, index) => {
          return (
            <button
              className={
                category === item ? 'category-btn active-btn' : 'category-btn '
              }
              key={index}
              name='category'
              onClick={(e) => {
                const name = e.target.name
                const value = e.target.textContent
                dispatch(handleFilters({ name, value }))
              }}
            >
              {item}
            </button>
          )
        })}
      </div>

      <div className='sort-container'>
        <p className='show'>
          Total <span className='number'>{counts}</span> products
        </p>
        <hr className='hr' />

        <div className='view-sort-container'>
          <FormRowX
            name='search'
            value={search}
            handleChange={handleFiltersInput}
          />
          <FormSelectX
            list={allTypes}
            name='type'
            value={type}
            handleChange={handleFiltersInput}
          />
          <FormSelectX
            list={sortTypes}
            name='sort'
            value={sort}
            handleChange={handleSortInput}
          />
          <button
            className='btn clear-btn'
            onClick={() => {
              dispatch(clearFilters())
            }}
          >
            Clear Filters
          </button>
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
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .btn-container {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem 0;
    align-items: center;
    gap: 0.5rem;
  }

  .category-btn {
    background: var(--grey50);
    color: black;
    border-radius: 0.3rem;
    font-weight: 500;
    padding: 0.35rem 0.65rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    transition: var(--transition);
    font-size: 0.9rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: var(--light-shadow);
    text-transform: capitalize;
  }
  .category-btn:hover {
    transform: scale(1.1);
  }
  .active-btn {
    background: var(--primary500);
    color: white;
  }
  .sort-container {
    padding: 0.5rem 0;
    display: grid;
    grid-template-columns: auto 1fr auto;
    justify-content: space-between;
    align-items: center;
    gap: 0.7rem;
  }
  p {
    margin: 0;
    padding: 0;
  }
  .hr {
    display: none;
  }
  .show {
    justify-self: left;
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
  .clear-btn {
    padding: 0.6rem 0.6rem;
    font-size: 0.875rem;
  }
  @media (min-width: 992px) {
    .btn-container {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .category-text {
      display: block;
    }
    .view {
      display: block;
    }
    .hr {
      display: block;
    }
  }
`
export default FiltersContainer
