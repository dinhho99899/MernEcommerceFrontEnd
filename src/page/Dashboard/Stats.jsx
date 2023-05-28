import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStats } from '../../features/orders/ordersSlice'
import {
  BsFillCalendarEventFill,
  BsWalletFill,
  BsBarChartLineFill,
} from 'react-icons/bs'
import { MdShopTwo, MdRateReview } from 'react-icons/md'
import { FaComment } from 'react-icons/fa'
import styled from 'styled-components'
const Stats = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getStats())
  }, [])
  const { stats } = useSelector((store) => store.orders)
  let count = 20
  const color = count > 10 ? 'var(--primary500)' : 'black'
  const style = {
    color: color,
  }
  return (
    <Wrapper>
      <article className='info'>
        <div className='left'>
          <h2 style={style}>{stats?.[0]?.count}</h2>
          <h4>Monthly Reviews</h4>
        </div>
        <span className='icon'>
          <FaComment />
        </span>
      </article>
      <article className='info'>
        <div className='left'>
          <h2 className='color'>{stats?.[0]?.count}</h2>
          <h4>Monthly Orders</h4>
        </div>
        <span className='icon'>
          <MdShopTwo />
        </span>
      </article>
      <article className='info'>
        <div className='left'>
          <h2 className='color'>{stats?.[0]?.count}</h2>
          <h4>Monthly Revenue</h4>
        </div>
        <span className='icon'>
          <BsFillCalendarEventFill />
        </span>
      </article>
      <article className='info'>
        <div className='left'>
          <h2 className='color'>{stats?.[0]?.count}</h2>
          <h4>Total Reviews</h4>
        </div>
        <span className='icon'>
          <MdRateReview />
        </span>
      </article>
      <article className='info'>
        <div className='left'>
          <h2 className='color'>{stats?.[0]?.count}</h2>
          <h4>Total Orders</h4>
        </div>
        <span className='icon'>
          <BsWalletFill />
        </span>
      </article>
      <article className='info'>
        <div className='left'>
          <h2 className='color'>{stats?.[0]?.count}\hzh\jfdkzZFD0</h2>
          <h4>Total Revenue</h4>
        </div>
        <span className='icon'>
          <BsBarChartLineFill />
        </span>
      </article>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 1rem;

  .info {
    padding: 2.5rem 1rem;
    display: grid;
    grid-template-columns: 1fr auto;
    text-align: center;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    background: var(--background-container);
    border-radius: 0.5rem;
  }

  h2 {
    font-size: 3rem;
  }
  h4 {
    line-height: 1.5;
  }
  .icon {
    font-size: 2.5rem;
    padding: 0 1rem;
    padding-top: 10px;
    background: var(--background-grey1);
    color: var(--primary500);
    border-radius: 0.5rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
export default Stats
