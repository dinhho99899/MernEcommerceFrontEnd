import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { FormRow, Loading } from '../components'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { updateUser, uploadFile } from '../features/users/userSlice'
const ProfileContainer = () => {
  const { user } = useSelector((store) => store.user)
  const { tempAvatar, uploadLoading } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    location: user?.location || '',
    lastname: user?.lastname || '',
    avatar: tempAvatar || user?.avatar,
  })
  const [value, setValue] = useState('')
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserData({ ...userData, [name]: value })
  }
  let formData = new FormData()
  const handleC = (e) => {
    const image = e.target.files[0]
    formData.append('image', image)
    setValue(formData)
    const fileReader = new FileReader()
    fileReader.addEventListener('load', () => {
      setUserData({ ...userData, avatar: fileReader.result })
    })
    fileReader.readAsDataURL(image)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, location, lastname } = userData
    if (!name || !email || !lastname || !location) {
      toast.error('Please Fill out all fields')
      return
    }
    if (value) {
      dispatch(uploadFile({ value, name, email, location, lastname }))
      return
    }
    dispatch(updateUser({ name, lastname, location, avatar: user.avatar }))
  }

  return (
    <Wrapper className='profile'>
      {uploadLoading ? (
        <Loading />
      ) : (
        <img className='avatar-img' src={userData.avatar}></img>
      )}
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            labelText='last name'
            name='lastname'
            value={userData.lastname}
            handleChange={handleChange}
          />
          <FormRow
            type='email'
            name='email*'
            value={user.email}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='location'
            value={userData.location}
            handleChange={handleChange}
          />
          <FormRow
            type='file'
            name='Avatar'
            accept='image/*'
            handleChange={handleC}
          />
        </div>
        <button className='btn' type='submit' onSubmit={handleSubmit}>
          Save changes
        </button>
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100%;
  display: grid;
  padding-top: 2rem;
  gap: 1rem;
  align-items: center;
  .avatar-img {
    max-width: 500px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 auto;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }

  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .btn {
    margin-top: 0.5rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: 300px 1fr;
    align-items: center;
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }
`
export default ProfileContainer
