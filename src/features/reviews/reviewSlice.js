import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { localFetch } from '../../utils/axios'
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
      const response = await localFetch.get(`noauth/reviews/${id}`)
      return response.data
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
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProductReviews.fulfilled, (state, { payload }) => {
      const { reviews, count } = payload
      state.reviews = reviews
      state.numberOfReviews = count
    })
  },
})
export const { handleChange } = reviewsSlice.actions
export default reviewsSlice.reducer
