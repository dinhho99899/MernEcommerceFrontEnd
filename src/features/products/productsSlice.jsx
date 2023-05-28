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
  sort: 'name a-z',
  sortTypes: ['name a-z', 'name z-a', 'price hightest', 'price lowest'],
  filters: {
    category: 'all',
    search: '',
    type: 'all',
    allTypes: ['all', 'Hạt bí', 'Hạt điều', 'Hạnh nhân'],
  },
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
      const response = await customFetch.get('/admin')
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
    handleSort: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
    },
    handleFilters: (state, { payload }) => {
      const { name, value } = payload
      state.filters[name] = value
    },
    sortProducts: (state) => {
      let filtersa = [...state.all_products]
      if (state.sort === 'price hightest') {
        filtersa = filtersa.sort((a, b) => b.price - a.price)
      }
      if (state.sort === 'price lowest') {
        filtersa = filtersa.sort((a, b) => a.price - b.price)
      }
      if (state.sort === 'name a-z') {
        filtersa = filtersa.sort((a, b) => a.name.localeCompare(b.name))
      }
      if (state.sort === 'name z-a') {
        filtersa = filtersa.sort((a, b) => b.name.localeCompare(a.name))
      }
      state.filteredProducts = filtersa
    },
    filtersProducts: (state) => {
      const { category, search, type } = state.filters
      let filters = [...state.all_products]
      if (search) {
        filters = state.all_products.filter((item) =>
          item.name.toLowerCase().startsWith(search)
        )
      }
      if (category !== 'all') {
        filters = filters.filter((item) => {
          return item.category === category
        })
      }
      if (type !== 'all') {
        filters = filters.filter((item) => {
          return item.name === type
        })
      }
      state.filteredProducts = filters
    },
    clearFilters: (state) => {
      state.sort = 'name a-z'
      state.filters.type = 'all'
      state.filters.search = ''
      state.filters.category = 'all'
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
export const {
  toggleSidebar,
  toggleListView,
  handleSort,
  handleFilters,
  filtersProducts,
  sortProducts,
  clearFilters,
} = productsSlice.actions
export default productsSlice.reducer
