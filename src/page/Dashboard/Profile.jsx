import { Loading, ProfileContainer } from '../../components'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user)

  if (isLoading)
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    )
  return (
    <Wrapper>
      <h3>Profile</h3>
      <ProfileContainer />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  border-radius: var(--radius);
  width: 100%;
  background: var(--background);
  padding: 2rem 2rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }
`

export default Profile
