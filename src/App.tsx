import React from 'react'
import './App.css'
import Header from './components/Header'
import Posts from './components/postList/Posts'

function App() {
  return (
    <div className="container">
      <Header />
      <Posts />
    </div>
  )
}

export default App
