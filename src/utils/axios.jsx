import axios from 'axios'
const customFetch = axios.create({
  baseURL: 'https://ecommerce-api-96rl.onrender.com/api/v1',
})
export const localFetch = axios.create({
  baseURL: 'http://localhost:5000/api/v1/',
})
export default customFetch
