import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Details from './DetailsPage/Details'

const Layout = () => {
  return (
    <div>
      <Link to="/">
        <Header />
      </Link>
      <Details />
    </div>
  )
}

export default Layout
