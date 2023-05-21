import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const ProtectRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user)
  if (!user) {
    return <Navigate to='/'></Navigate>
  }
  return children
}

export default ProtectRoute
