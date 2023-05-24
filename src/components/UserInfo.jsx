import { useState } from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FaUserAlt } from 'react-icons/fa'
import { logoutUser, logoutDirectly } from '../features/users/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const UserInfo = () => {
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const [isDropDown, setDropDown] = useState(false)
  const handleLogout = () => {
    dispatch(logoutUser())
    dispatch(logoutDirectly())
  }
  if (!user) {
    return (
      <Link className='btn register-btn' to='/register'>
        Sign In
      </Link>
    )
  }
  return (
    <Wrapper>
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
          <MdKeyboardArrowDown />
        </span>
        <div className={isDropDown ? 'user-modal show-dropdown' : 'user-modal'}>
          <div className='dropdown'>
            <span className='user-btn'>
              <FaUserAlt />
            </span>
            <p className='username'>Hello {user.name}</p>
          </div>
          <div className='dropdown' onClick={handleLogout}>
            <span className='user-btn'>
              <FaUserAlt />
            </span>
            <p className='username'>Sign out</p>
          </div>
          <Link to='/dashboard' className='dropdown'>
            <span className='user-btn'>
              <FaUserAlt />
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
    position: absolute;
    width: 100%;
    left: 0;
    top: 2rem;
    background: var(--background-grey1);
    padding: 0.4rem 0.4rem;
    border-radius: 0.5rem;
    display: none;
    box-shadow: var(--dark-shadow);
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
