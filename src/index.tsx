import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from '../node_modules/react-router-dom/index'
import Posts from './components/PostList/Posts'
import Layout from './routes/Layout'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="posts" element={<Posts />} />
      <Route path="posts/:id" element={<Layout />} />
    </Routes>
  </Router>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
