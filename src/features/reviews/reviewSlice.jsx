import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch, { localFetch } from '../../utils/axios'
const review = {
  rating: 0,
  title: '',
  comment: '',
}
const initialState = {
  isLoading: false,
  reviews: [],
  numberOfReviews: 0,
  ...review,
}

export const getAllProductReviews = createAsyncThunk(
  'reviews/getAllReviews',
  async (id, thunkAPI) => {
    try {
      const response = await customFetch.get(`noauth/reviews/${id}`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
)
export const createReview = createAsyncThunk(
  'reviews/createReview',

  async (review, thunkAPI) => {
    try {
      console.log(thunkAPI.getState().user.user.token)
      const response = await customFetch.post('/reviews', review, {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      thunkAPI.dispatch(clearValue())
      thunkAPI.dispatch(getAllProductReviews(review.product))
    } catch (error) {
      console.log(error)
    }
  }
)
const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
    },
    clearValue: (state) => {
      state.comment = ''
      state.rating = 0
      state.comment = ''
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProductReviews.fulfilled, (state, { payload }) => {
      const { reviews, count } = payload
      state.reviews = reviews
      state.numberOfReviews = count
    })
  },
})
export const { handleChange, clearValue } = reviewsSlice.actions
export default reviewsSlice.reducer
