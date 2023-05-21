import { createSlice } from '@reduxjs/toolkit'
import { getCartFromLocalStorage } from '../../utils/LocalStorage'
const initialState = {
  isCartModalOpen: false,
  cart: getCartFromLocalStorage(),
  total_items: 0,
  total_amount: 0,
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartModal: (state) => {
      state.isCartModalOpen = !state.isCartModalOpen
    },
    openCartModal: (state) => {
      state.isCartModalOpen = true
    },
    addToCart: (state, { payload }) => {
      const { name, weight, id, price, image, amount } = payload
      const { cart } = state
      let tempCart = cart.find((item) => item.id === id + weight)
      if (tempCart) {
        tempCart = cart.map((item) => {
          if (item.id === id + weight) {
            const newAmount = item.amount + amount
            return { ...item, amount: newAmount }
          }
          return item
        })
        state.cart = tempCart
      } else {
        const newItem = {
          name,
          weight,
          id: id + weight,
          price,
          image,
          amount,
        }
        state.cart = [...state.cart, newItem]
      }
    },
    handleCartTotal: (state) => {
      const { total_amount, total_items } = state.cart.reduce(
        (total, item) => {
          total.total_items += item.amount
          total.total_amount += item.price * item.amount
          return total
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      )
      state.total_items = total_items
      state.total_amount = total_amount
    },
    toggleItemAmount: (state, { payload }) => {
      console.log(payload)
    },
    removeItem: (state, { payload }) => {
      let tempCart = state.cart.filter((item) => item.id !== payload.itemId)
      state.cart = tempCart
    },
  },
})
export const {
  toggleCartModal,
  addToCart,
  handleCartTotal,
  removeItem,
  openCartModal,
  toggleItemAmount,
} = CartSlice.actions
export default CartSlice.reducer
