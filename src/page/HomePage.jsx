import React, { useEffect } from 'react'
import styled from 'styled-components'
import { getAllProductsByAdmin } from '../features/products/productsSlice'
import { useDispatch } from 'react-redux'
import {
  Hero,
  AboutUs,
  Services,
  Contact,
  NewLetters,
  Products,
  Testimonials,
  Blog,
  AddInfo,
} from '../components'

const HomePage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProductsByAdmin())
  }, [])
  return (
    <Wrapper>
      <AddInfo />
      <Hero />
      <Services />
      <AboutUs />
      <Products />
      <Testimonials />
      <NewLetters />
      <Blog />
      <Contact />
    </Wrapper>
  )
}
const Wrapper = styled.main`
  max-width: 2200px;
  margin: 0 auto;
`
export default HomePage
