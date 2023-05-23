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
          product: id,
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
      const { value, id } = payload
      let tempCart = state.cart.map((item) => {
        if (item.id === id) {
          let newAmount
          if (value === 'increase') {
            newAmount = item.amount + 1
          }
          if (value === 'decrease') {
            newAmount = item.amount - 1
            if (newAmount < 1) {
              newAmount = 1
            }
          }
          return { ...item, amount: newAmount }
        }
        return item
      })
      state.cart = tempCart
    },
    removeItem: (state, { payload }) => {
      let tempCart = state.cart.filter((item) => item.id !== payload.itemId)
      state.cart = tempCart
    },
    clearCart: (state) => {
      state.cart = []
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
  clearCart,
} = CartSlice.actions
export default CartSlice.reducer
