export const getCartFromLocalStorage = () => {
  let result = localStorage.getItem('cart')
  let cart = result ? JSON.parse(localStorage.getItem('cart')) : []
  return cart
}
export const addCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}
export const getUserFromLocalStorage = () => {
  let result = localStorage.getItem('user')
  let user = result ? JSON.parse(localStorage.getItem('user')) : null
  return user
}
export const addUserToLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}
export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user')
}
export const formatPrice = (number) => {
  return new Intl.NumberFormat('de-DE').format(number)
}
console.log(formatPrice(500000))
export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])
  if (type === 'colors') {
    unique = unique.flat()
  }

  return ['all', ...new Set(unique)]
}
