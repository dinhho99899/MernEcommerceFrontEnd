import React from 'react'
import styled from 'styled-components'
import { FormArea, FormRow, Stars, Comment } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { handleChange } from '../features/reviews/reviewSlice'
const Comments = () => {
  const { reviews, count, title, comment, rating } = useSelector(
    (store) => store.reviews
  )
  const dispatch = useDispatch()
  const handleInput = (e) => {
    let name = e.target.name
    let value = e.target.value
    console.log(name, value)
    if (name === 'rating') {
      value = e.target.dataset.id
    }
    dispatch(handleChange({ name, value }))
  }
  return (
    <Wrapper>
      <div className='form'>
        <Stars numbers={rating} name='rating' handleChange={handleInput} />
        <FormRow
          type='text'
          value={title}
          placeholder='title'
          name='title'
          handleChange={handleInput}
        />
        <FormArea
          type='text'
          value={comment}
          placeholder='Message'
          name='comment'
          handleChange={handleInput}
        />
        <div className='submit-container'>
          <button className='btn'>Send</button>
        </div>
        <hr />
        <div className='comments-container'>
          {reviews.map((review) => {
            return <Comment {...review} key={review._id} />
          })}
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
