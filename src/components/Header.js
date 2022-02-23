import React from 'react'
import Headerstyles from './Header.module.css'

const Header = () => {
  return (
    <header className={Headerstyles.header}>
      <h1 className={Headerstyles.titleTop}>The Book Review</h1>
      <h4 className={Headerstyles.titleBottom}>CLUB</h4>
    </header>
  )
}

export default Header
