import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Loading } from '../../components'
import { getAllOrders } from '../../features/orders/ordersSlice'
import { formatPrice } from '../../utils/LocalStorage'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
const Orders = () => {
  const { orders, count, isLoading } = useSelector((store) => store.orders)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllOrders())
  }, [])

  const totalAmount = orders.reduce((total, item) => {
    total += item.total
    return total
  }, 0)
  if (isLoading)
    return (
      <Wrapper>
        <div className='center'>
          <Loading />
        </div>
      </Wrapper>
    )
  return (
    <Wrapper>
      <table className='table'>
        <tr>
          <th>Name</th>
          <th>OrderId</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Note</th>
          <th>Shipping Method</th>
          <th>Status</th>
          <th>Date</th>
          <th>Total</th>
        </tr>
        {orders.map((order, index) => {
          const {
            user,
            total,
            createdAt,
            status,
            _id: orderId,
            note,
            name,
            address,
            phone,
          } = order
          const date = moment(createdAt).format('DD/MM/YYYY')
          return (
            <tr key={index}>
              <td>{name}</td>
              <td>{orderId}</td>
              <td>{phone}</td>
              <td>{address}</td>
              <td>{note}</td>
              <td>{status}</td>
              <td>{status}</td>
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
          <td></td>
          <td></td>
          <td></td>
          <td>{count} orders</td>
          <td>{formatPrice(totalAmount)}đ</td>
        </tr>
      </table>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .center {
    min-height: calc(100vh - 7.5rem);
    display: grid;
    place-items: center;
  }
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
