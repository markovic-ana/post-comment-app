import './App.css'
import Header from './components/Header'
import Posts from './components/Posts'
import { useEffect, useState } from 'react'

function App() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    requestPosts()
    requestUsers()
  }, [])

  async function requestPosts() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const json = await response.json()
    setPosts(json)
  }

  async function requestUsers() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const json = await response.json()
    setUsers(json)
  }

  return (
    <div>
      <Header />
      <Posts posts={posts} users={users} />
    </div>
  )
}

export default App
