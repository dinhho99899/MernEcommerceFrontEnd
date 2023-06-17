import React from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import {
  page1,
  page2,
  page3,
  page6,
  page9,
  page10,
  page11,
  page13,
  page14,
  page15,
  page16,
  page17,
  page18,
} from './VisaInfo'
const AddInfo = () => {
  return (
    <Wrapper>
      <table class='center'>
        <tr>
          <th>Title</th>
          <th>Type</th>
          <th className='value'>Value</th>
          <th>Function</th>
        </tr>
        <tr>
          <td colspan='4' className='value'>
            <span className='page'>1/16</span> Terms and Conditions
          </td>
        </tr>
        <tr>
          <td>{page1.title}</td>
          <td className='info'>{page1.type}</td>
          <td className='value'>{page1.value}</td>
          <td className='value'>Next</td>
        </tr>
        <tr>
          <td colspan='4' className='value'>
            <span className='page'>2/16</span> Applicant Content
          </td>
        </tr>
        {page2.map((item) => {
          return (
            <tr>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td className='value'>{item.value}</td>
              <td className='value'>Next</td>
            </tr>
          )
        })}
        <tr>
          <td colspan='4' className='value'>
            <span className='page'>3/16</span> Applicant
          </td>
        </tr>
        {page3.map((item) => {
          return (
            <tr>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td className='value'>{item.value}</td>
              <td className='value'>
                <button
                  type='btn'
                  className='transparent-btn'
                  onClick={() => {
                    navigator.clipboard.writeText(item.value)
                    toast.success(item.value)
                  }}
                >
                  {item.icon}
                </button>
              </td>
            </tr>
          )
        })}
        <tr>
          <td colspan='4' className='value'>
            <span className='page'>4/16</span> Critical data confirmation
          </td>
        </tr>
        <tr>
          <td>Information correct?</td>
          <td>Select</td>
          <td className='value'>Yes</td>
          <td className='value'>
            <button type='btn' className='transparent-btn'></button>
          </td>
        </tr>
        <tr>
          <td colspan='4' className='value'>
            <span className='page'>5/16</span> Addtional questions
          </td>
        </tr>
        <tr>
          <td>Has traveled to Austrian</td>
          <td>Select</td>
          <td className='value'>No</td>
          <td className='value'>
            <button type='btn' className='transparent-btn'></button>
          </td>
        </tr>
        <tr>
          <td colspan='4' className='value'>
            <span className='page'>6/16</span> Addtional questions
          </td>
        </tr>
        {page6.map((item) => {
          return (
            <tr>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td className='value'>{item.value}</td>
              <td className='value'>
                <button
                  type='btn'
                  className='transparent-btn'
                  onClick={() => {
                    navigator.clipboard.writeText(item.value)
                    toast.success(item.value)
                  }}
                >
                  {item.icon}
                </button>
              </td>
            </tr>
          )
        })}
        <tr>
          <td colspan='4' className='value'>
            <span className='page'>7/16</span> Authority receipt
          </td>
        </tr>
        <tr>
          <td>This authories the department to send the</td>
          <td>Select</td>
          <td className='value'>No</td>
          <td className='value'>
            <button type='btn' className='transparent-btn'></button>
          </td>
        </tr>
        <tr>
          <td colspan='4' className='value'>
            <span className='page'>9/16</span> Education
          </td>
        </tr>
        <tr>
          <td>requirement for this visa</td>
          <td>Select</td>
          <td className='value'>Yes</td>
          <td className='value'>
            <button type='btn' className='transparent-btn'></button>
          </td>
        </tr>
        {page9.map((item) => {
          return (
            <tr>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td className='value'>{item.value}</td>
              <td className='value'>
                <button
                  type='btn'
                  className='transparent-btn'
                  onClick={() => {
                    navigator.clipboard.writeText(item.value)
                    toast.success(item.value)
                  }}
                >
                  {item.icon}
                </button>
              </td>
            </tr>
          )
        })}
        <tr>
          <td colspan='4' className='value'>
            <span className='page'>10/16</span> Employment
          </td>
        </tr>
        {page10.map((item) => {
          return (
            <tr>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td className='value'>{item.value}</td>
              <td className='value'>
                <button
                  type='btn'
                  className='transparent-btn'
                  onClick={() => {
                    navigator.clipboard.writeText(item.value)
                    toast.success(item.value)
                  }}
                >
                  {item.icon}
                </button>
              </td>
            </tr>
          )
        })}
        <tr>
          <td colspan='4' className='value'>
            <span className='page'>11/16</span> Language
          </td>
        </tr>
        {page11.map((item) => {
          return (
            <tr>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td className='value'>{item.value}</td>
              <td className='value'>
                <button
                  type='btn'
                  className='transparent-btn'
                  onClick={() => {
                    navigator.clipboard.writeText(item.value)
                    toast.success(item.value)
                  }}
                >
                  {item.icon}
                </button>
              </td>
            </tr>
          )
        })}
        <tr>
          <td colspan='4' className='value'>
            <span className='page'>13 /16</span> Health declarations
          </td>
        </tr>
        {page13.map((item) => {
          return (
            <tr>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td className='value'>{item.value}</td>
              <td className='value'>
                <button
                  type='btn'
                  className='transparent-btn'
                  onClick={() => {
                    navigator.clipboard.writeText(item.value)
                    toast.success(item.value)
                  }}
                >
                  {item.icon}
                </button>
              </td>
            </tr>
          )
        })}
        <tr>
          <td colspan='4' className='value'>
            <span className='page'>14/16</span> Character declarations
          </td>
        </tr>
        {page14.map((item) => {
          return (
            <tr>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td className='value'>{item.value}</td>
              <td className='value'>
                <button
                  type='btn'
                  className='transparent-btn'
                  onClick={() => {
                    navigator.clipboard.writeText(item.value)
                    toast.success(item.value)
                  }}
                >
                  {item.icon}
                </button>
              </td>
            </tr>
          )
        })}
        <tr>
          <td colspan='4' className='value'>
            <span className='page'>15/16</span> Work and Holiday declarations
          </td>
        </tr>
        {page15.map((item) => {
          return (
            <tr>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td className='value'>{item.value}</td>
              <td className='value'>
                <button
                  type='btn'
                  className='transparent-btn'
                  onClick={() => {
                    navigator.clipboard.writeText(item.value)
                    toast.success(item.value)
                  }}
                >
                  {item.icon}
                </button>
              </td>
            </tr>
          )
        })}
        <tr>
          <td colspan='4' className='value'>
            <span className='page'>16/16</span> Declarations
          </td>
        </tr>
        {page16.map((item) => {
          return (
            <tr>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td className='value'>{item.value}</td>
              <td className='value'>
                <button
                  type='btn'
                  className='transparent-btn'
                  onClick={() => {
                    navigator.clipboard.writeText(item.value)
                    toast.success(item.value)
                  }}
                >
                  {item.icon}
                </button>
              </td>
            </tr>
          )
        })}
        <tr>
          <td colspan='4' className='value'>
            <span className='page'>17/16</span> Credit
          </td>
        </tr>
        {page17.map((item) => {
          return (
            <tr>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td className='value'>{item.value}</td>
              <td className='value'>
                <button
                  type='btn'
                  className='transparent-btn'
                  onClick={() => {
                    navigator.clipboard.writeText(item.value)
                    toast.success(item.value)
                  }}
                >
                  {item.icon}
                </button>
              </td>
            </tr>
          )
        })}
        <tr>
          <td colspan='4' className='value'>
            <span className='page'>18/16</span> Document
          </td>
        </tr>
        {page18.map((item) => {
          return (
            <tr>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td className='value'>{item.value}</td>
              <td className='value'>
                <button
                  type='btn'
                  className='transparent-btn'
                  onClick={() => {
                    navigator.clipboard.writeText(item.value)
                    toast.success(item.value)
                  }}
                >
                  {item.icon}
                </button>
              </td>
            </tr>
          )
        })}
      </table>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  min-height: calc(100vh - 4.5rem);
  padding: 0rem 1rem;
  max-width: 800px;
  margin: 0 auto;
  .line {
    display: grid;
    align-items: center;
    grid-template-columns: 300px 1fr auto;
    gap: 1rem;
  }
  .page {
    color: var(--primary500);
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
    font-size: 0.875rem;
  }

  th,
  td {
    text-align: left;
    padding: 8px;
    padding: 5px 1rem;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  .value {
    text-align: center;
  }
  tr:hover {
    background-color: var(--primary300);
  }
`
export default AddInfo
