import React from 'react'
import styled from 'styled-components'
const AllUsers = () => {
  return (
    <Wrapper>
      <table className='table'>
        <tr>
          <th>Avatar</th>
          <th>Username</th>
          <th>Name</th>
          <th>Role</th>
          <th>Orders</th>
          <th>Ave Rating</th>
          <th>Revenue</th>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>

          <td>94</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
          <td>94</td>
        </tr>
        <tr>
          <td>Adam</td>
          <td>Johnson</td>
          <td>67</td>
          <td>67</td>

          <td>67</td>
          <td>67</td>
          <td>67</td>
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
export default AllUsers
