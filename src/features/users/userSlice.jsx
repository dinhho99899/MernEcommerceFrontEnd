import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import customFetch, { localFetch } from '../../utils/axios'
import { toast } from 'react-toastify'
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  addUserToLocalStorage,
} from '../../utils/LocalStorage'
const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
  tempAvatar: '',
  uploadLoading: false,
}

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post('/auth/register', user)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post('/auth/login', user)
      console.log(response)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (userInfo, thunkAPI) => {
    try {
      const response = await customFetch.patch('/users/updateUser', userInfo, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      return response.data
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get('/auth/logout')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)
export const uploadFile = createAsyncThunk(
  'products/uploadFile',
  async (formData, thunkAPI) => {
    const { value, name, location, lastname } = formData
    try {
      const response = await localFetch.post(`/products/uploadImage`, value, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      const avatar = response.data.image.src
      thunkAPI.dispatch(
        updateUser({ name, location, lastname, avatar: avatar })
      )
      return response.data.image
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutDirectly: (state) => {
      state.user = null
      removeUserFromLocalStorage()
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload
        state.isLoading = false
        state.user = user
        addUserToLocalStorage(user)
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload
        state.isLoading = false
        state.user = user
        addUserToLocalStorage(user)
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = null
        removeUserFromLocalStorage()
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload
        state.user = user
        toast.success('Update Successfully')
        addUserToLocalStorage(user)
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        toast.error(payload)
      })
      .addCase(uploadFile.pending, (state) => {
        state.uploadLoading = true
      })
      .addCase(uploadFile.fulfilled, (state, { payload }) => {
        state.tempAvatar = payload.src
        state.uploadLoading = false
      })
      .addCase(uploadFile.rejected, (state, { payload }) => {
        toast.error(payload)
        state.uploadLoading = false
      })
  },
})
export const { logoutDirectly } = userSlice.actions
export default userSlice.reducer
