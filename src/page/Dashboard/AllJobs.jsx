import { useEffect } from 'react'
import { JobsContainer, SearchContainer } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { getUserProducts } from '../../features/products/productsSlice'
import { Loading } from '../../components'
const AllJobs = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserProducts())
  }, [])
  const { all_products, isLoading } = useSelector((store) => store.products)
  if (isLoading) return <Loading center />

  return (
    <>
      <SearchContainer />
      <JobsContainer products={all_products} />
    </>
  )
}

export default AllJobs
