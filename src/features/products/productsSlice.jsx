import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch, { localFetch } from '../../utils/axios'
import { toast } from 'react-toastify'
const initialState = {
  isSidebarOpen: false,
  isLoading: false,
  isListView: true,
  all_products: [],
  featuredProducts: [],
  filteredProducts: [],
  counts: 0,
  product: {},
}
export const getUserProducts = createAsyncThunk(
  'products/getUserProducts',
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get('/products', {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      console.log(response)
      return response.data.products
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)
export const getAllProductsByAdmin = createAsyncThunk(
  'products/allProductsByAdmin',
  async (_, thunkAPI) => {
    try {
      const response = await localFetch.get('/admin')
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
)
export const getSingleProductByAdmin = createAsyncThunk(
  'products/allProductByAdmin',
  async (id, thunkAPI) => {
    try {
      const response = await customFetch.get(`/admin/${id}`)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },
    toggleListView: (state) => {
      state.isListView = !state.isListView
    },
    filterProducts: (state, { payload }) => {
      const { name, value } = payload
      console.log(value)
      if (value !== 'All') {
        let filters = [...state.all_products]
        state.filteredProducts = filters.filter((item) => item[name] === value)
      } else {
        state.filteredProducts = state.all_products
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductsByAdmin.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllProductsByAdmin.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.all_products = payload.products
        state.counts = payload.count
        const featuredProducts = payload.products.filter(
          (item) => item.featured === true
        )
        state.featuredProducts = featuredProducts
        state.filteredProducts = payload.products
      })
      .addCase(getSingleProductByAdmin.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSingleProductByAdmin.fulfilled, (state, { payload }) => {
        state.isLoading = true
        state.product = payload.product
      })
      .addCase(getUserProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.all_products = payload
      })
  },
})
export const { toggleSidebar, toggleListView, filterProducts } =
  productsSlice.actions
export default productsSlice.reducer
