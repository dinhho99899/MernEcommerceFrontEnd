import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FormRow, Logo } from '../components'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  loginUser,
  logoutUser,
  registerUser,
} from '../features/users/userSlice'
const Register = () => {
  const dispatch = useDispatch()
  const { isLoading, user } = useSelector((store) => store.user)
  const [time, setTime] = useState(4)
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    isMember: false,
  })
  const navigate = useNavigate()
  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData({ ...data, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = data
    if (!email || !password || (!isMember && !name)) return
    if (!isMember) {
      dispatch(registerUser({ name, email, password }))
    }
    dispatch(loginUser({ email, password }))
  }
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  }, [user, navigate])
  if (user)
    return (
      <Wrapper>
        <div className='modal'>
          <div className='modal-content success'>
            <p className='login-successfully'>You have signed in</p>
            <Link to='/' className='link'>
              Back Home After {time}s
            </Link>
          </div>
        </div>
      </Wrapper>
    )
  return (
    <Wrapper>
      <div className='modal'>
        <div className='modal-content'>
          <div className='absolute-logo'>
            <Logo />
          </div>
          <h3 className='title'>Join our community</h3>
          <p>Start your journey with our product</p>
          <form className='form' onSubmit={handleSubmit}>
            {!data.isMember && (
              <FormRow
                classname='article-text'
                type='text'
                name='name'
                value={data.name}
                handleChange={handleInput}
              />
            )}
            <FormRow
              classname='article-text'
              type='email'
              name='email'
              value={data.email}
              handleChange={handleInput}
            />
            <FormRow
              classname='article-text'
              type='password'
              name='password'
              value={data.password}
              handleChange={handleInput}
            />
            <div className='btn-container'>
              <div className='check'>
                <input type='checkbox' />
                <label className=''>Remember me</label>
              </div>
              <p className='color'>Forgot Password</p>
            </div>
            {isLoading ? (
              <button type='submit' className='btn'>
                {data.isMember ? 'Login' : 'Register'}
              </button>
            ) : (
              <button type='submit' className='btn'>
                {data.isMember ? 'Login' : 'Register'}
              </button>
            )}
          </form>

          <p>
            {data.isMember ? 'New to NTV Nuts?' : 'Already have a account? '}
            <span
              className='color'
              onClick={() => {
                setData({ ...data, isMember: !data.isMember })
              }}
            >
              {data.isMember ? ' Register?' : ' Login'}
            </span>
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background: var(--background-grey1);
  min-height: calc(100vh - 4.2rem);
  display: grid;
  place-items: center;
  .modal {
    width: 90%;
    margin: 0 auto;
  }
  .modal-content {
    display: grid;
    place-items: center;
    background: var(--white);
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem 3rem;
    border-radius: 1rem;
    position: relative;
  }
  .success {
    max-width: 300px;
    padding: 0.5rem 0;
    background: transparent;
  }
  .login-successfully {
    font-size: 1.4rem;
  }
  .absolute-logo {
    position: absolute;
    top: -1.5rem;
    color: var(--grey300);
  }
  .title {
    margin-bottom: 0.5rem;
    color: var(--grey-text);
  }
  p {
    color: var(--grey-text);
  }
  .form {
    margin-top: 1rem;
    width: 100%;
    max-width: 380px;
  }
  .btn-container {
    width: 100%;
    max-width: 380px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .check {
    display: flex;
    gap: 0.3rem;
    color: var(--grey-text);
  }
  .btn {
    width: 100%;
    max-width: 380px;
    margin-bottom: 1rem;
  }
  .color {
    color: var(--primary500);
    cursor: pointer;
  }
  .color:hover {
    color: var(--primary400);
  }
`
export default Register
