import React, { useEffect } from 'react'
import styled from 'styled-components'
import { FormArea, FormRow, Stars, Comment } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import {
  handleChange,
  createReview,
  getAllProductReviews,
} from '../features/reviews/reviewSlice'
import { toast } from 'react-toastify'
const Comments = () => {
  const { productId: id } = useParams()
  const { user } = useSelector((store) => store.user)
  const { reviews, count, title, comment, rating } = useSelector(
    (store) => store.reviews
  )
  useEffect(() => {
    dispatch(getAllProductReviews(id))
  }, [id, reviews.length])
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
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!rating || !title || !comment) {
      toast.error('please fill out all fields')
      return
    }
    dispatch(createReview({ product: id, rating, title, comment }))
  }
  return (
    <Wrapper>
      <div className='form'>
        <Stars numbers={rating} name='rating' handleChange={handleInput} />
        <form onSubmit={handleSubmit}>
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
            {user ? (
              <button className='btn'>Send</button>
            ) : (
              <Link to='/register' className='btn'>
                Login
              </Link>
            )}
          </div>
        </form>
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
