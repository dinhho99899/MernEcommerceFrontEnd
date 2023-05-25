import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { clearCart } from '../cart/CartSlice'
import {
  getCartFromLocalStorage,
  removeCartFromLocalStorage,
} from '../../utils/LocalStorage'
import { toast } from 'react-toastify'
import customFetch, { localFetch } from '../../utils/axios'
const userInfo = {
  name: '',
  email: '',
  phone: '',
  address: '',
  note: '',
}
const initialState = {
  isCompleteModal: false,
  shippingFee: 20000,
  tax: '0',
  ...userInfo,
  order: null,
  orders: [],
  count: 0,
}
export const getAllOrders = createAsyncThunk(
  'orders/getAllOrders',
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get('/orders/getAllMyOrders', {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      console.log(response)
      return response.data
    } catch (error) {}
  }
)
export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (order, thunkAPI) => {
    try {
      const response = await customFetch.post('/orders', order, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })

      thunkAPI.dispatch(clearCart())
      thunkAPI.dispatch(clearValue())
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
)
export const createOrderWithoutAuth = createAsyncThunk(
  'order/createOrderWithoutAuth',
  async (order, thunkAPI) => {
    try {
      const response = await customFetch.post(
        '/orders/createOrderWithoutAuth',
        order
      )
      console.log(response)
      thunkAPI.dispatch(clearCart())
      thunkAPI.dispatch(clearValue())
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
)
const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
    },
    clearValue: (state) => {
      return { ...initialState }
    },
    toggleCompletedModal: (state) => {
      state.isCompleteModal = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.fulfilled, (state, { payload }) => {
        state.order = payload.order
        toast.success(payload.msg)
        state.isCompleteModal = true
      })
      .addCase(getAllOrders.fulfilled, (state, { payload }) => {
        state.orders = payload.orders
        state.count = payload.count
      })
      .addCase(createOrderWithoutAuth.fulfilled, (state, { payload }) => {
        state.order = payload.order
        toast.success(payload.msg)
        state.isCompleteModal = true
      })
  },
})
export const { handleChange, clearValue, toggleCompletedModal } =
  ordersSlice.actions
export default ordersSlice.reducer
