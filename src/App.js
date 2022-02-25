import './App.css'
import Header from './components/Header'
import Posts from './components/Posts'
import useFetch from './hooks/useFetch'
import Search from './components/Search.js'

function App() {
  const [posts] = useFetch('https://jsonplaceholder.typicode.com/posts')
  const [users] = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <div className=".container">
      <Header />
      {/* <Search posts={posts} /> */}
      <Posts posts={posts} users={users} />
    </div>
  )
}

export default App
