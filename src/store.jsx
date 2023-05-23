import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/users/userSlice'
import productsSlice from './features/products/productsSlice'
import CartSlice from './features/cart/CartSlice'
import allJobsSlice from './features/products/allJobsSlice'
import jobSlice from './features/products/jobSlice'
import reviewSlice from './features/reviews/reviewSlice'
import ordersSlice from './features/orders/ordersSlice'
export const store = configureStore({
  reducer: {
    user: userSlice,
    products: productsSlice,
    cart: CartSlice,
    allJobs: allJobsSlice,
    job: jobSlice,
    reviews: reviewSlice,
    orders: ordersSlice,
  },
})
