import React, { useEffect } from 'react'
import styled from 'styled-components'

import { getAllOrders } from '../../features/orders/ordersSlice'
import { formatPrice } from '../../utils/LocalStorage'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
const Orders = () => {
  const { orders, count } = useSelector((store) => store.orders)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllOrders())
  }, [])

  return (
    <Wrapper>
      <table className='table'>
        <tr>
          <th>Username</th>
          <th>OrderId</th>
          <th>Status</th>
          <th>Note</th>
          <th>Date</th>
          <th>Total</th>
        </tr>
        {orders.map((order, index) => {
          const { user, total, createdAt, status, _id: orderId, note } = order
          const date = moment(createdAt).format('DD/MM/YYYY')
          return (
            <tr key={index}>
              <td>{user}</td>
              <td>{orderId}</td>
              <td>{status}</td>
              <td>{note}</td>
              <td>{date}</td>
              <td>{formatPrice(total)}đ</td>
            </tr>
          )
        })}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td> <td>{count} orders</td>
        </tr>
      </table>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  th,
  td {
    text-align: center;
    padding: 0.5rem 0;
    border-spacing: 0;
    border: 1px solid #ddd;
    padding: 8px;
  }
  tr:nth-child(even) {
    background-color: var(--background-grey1);
  }
`
export default Orders
