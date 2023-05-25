import { useState, useRef } from 'react'
import styled from 'styled-components'
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdSpaceDashboard,
  MdAccountCircle,
  MdLogout,
} from 'react-icons/md'
import { logoutUser, logoutDirectly } from '../features/users/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const UserInfo = ({ toggle }) => {
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const [isDropDown, setDropDown] = useState(false)
  const handleLogout = () => {
    dispatch(logoutUser())
    dispatch(logoutDirectly())
    toggle()
  }

  const subMenu = useRef(null)

  const [state, setState] = useState('3.5rem')
  const handle = (e) => {
    const subM = subMenu.current
    const { top } = subM.getBoundingClientRect()

    if (top > 200) {
      setState('-11.5rem')
    }
  }

  const styleling = {
    position: 'absolute',
    width: '100%',
    left: '0',
    top: state,
    backgroundColor: 'var(--background-grey1)',
    padding: '0.4rem 0.4rem',
    borderRadius: '0.5rem',
    boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.2)',
  }
  if (!user) {
    return (
      <Link className='btn register-btn' to='/register' onClick={toggle}>
        Sign In
      </Link>
    )
  }
  return (
    <Wrapper ref={subMenu} onClick={handle}>
      <div
        className='user'
        onClick={() => {
          setDropDown(!isDropDown)
        }}
      >
        <img src={user.avatar} className='user-avatar' alt='avatar' />
        <p className='username'>
          Hello <span className='color'>{user.name}</span>
        </p>
        <span className='user-btn'>
          {!isDropDown ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
        </span>
        <div
          className={isDropDown ? 'user-modal show-dropdown' : 'user-modal'}
          style={styleling}
        >
          <Link to='/dashboard/profile' className='dropdown'>
            <span className='user-btn'>
              <MdAccountCircle />
            </span>
            <p className='username'>Profile</p>
          </Link>
          <div className='dropdown' onClick={handleLogout}>
            <span className='user-btn'>
              <MdLogout />
            </span>
            <p className='username'>Sign out</p>
          </div>
          <Link to='/dashboard' className='dropdown' onClick={toggle}>
            <span className='user-btn'>
              <MdSpaceDashboard />
            </span>
            <p className='username'>Dashboard</p>
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  border: none;
  cursor: pointer;
  background: transparent;
  .user {
    position: relative;
    text-transform: capitalize;
    display: grid;
    grid-template-columns: auto 120px auto;
    align-items: center;
    gap: 0.5rem;
  }
  .user-avatar {
    height: 35px;
    width: 35px;
    border-radius: 50%;
  }
  .username {
    justify-self: left;
  }
  .user-btn {
    font-size: 1.4rem;
    padding-top: 5px;
  }
  .user-modal {
    display: none;
  }
  .show-dropdown {
    display: block;
  }
  .dropdown {
    display: grid;
    grid-template-columns: auto 160px auto;
    align-items: center;
    gap: 0.5rem;
    padding: 0.35rem 0.35rem;
    margin-bottom: 0.3rem;
    border-radius: var(--radius);
  }
  .dropdown:hover {
    background: var(--hover-grey50);
  }
`
export default UserInfo
