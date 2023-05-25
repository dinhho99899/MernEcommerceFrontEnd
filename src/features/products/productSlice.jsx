import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import customFetch, { localFetch } from '../../utils/axios'
import { logoutUser } from '../users/userSlice'
const initialState = {
  isLoading: false,
  name: '',
  category: '',
  description: '',
  price: 0,
  image: '',
  title: '',
  usermanual: '',
  company: '',
  featured: false,
  freeShipping: false,
  inventory: 0,
  averageRating: 5,
  isEditing: false,
  editId: '',
}
export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (job, thunkAPI) => {
    try {
      const response = await localFetch.post('/jobs', job, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      thunkAPI.dispatch(clearInput())
      return response.data
    } catch (error) {
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser())
        return thunkAPI.rejectWithValue('Unauthorized! Logging Out...')
      }
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)
export const editProduct = createAsyncThunk(
  'products/editProduct',
  async ({ jobId, job }, thunkAPI) => {
    try {
      const response = await customFetch.patch(`/jobs/${jobId}`, job, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      thunkAPI.dispatch(clearInput())
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
    },
    clearInput: () => {
      return { ...initialState }
    },
    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false
        toast.success('Job Created')
      })
      .addCase(createProduct.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
      .addCase(editProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(editProduct.fulfilled, (state) => {
        state.isLoading = false
        toast.success('Job Modified...')
      })
      .addCase(editProduct.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
  },
})
export const { handleChange, clearInput, setEditJob } = productSlice.actions
export default productSlice.reducer
