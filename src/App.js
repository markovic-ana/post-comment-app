import './App.css'
import Header from './components/Header'
import Posts from './components/Posts'
import useFetch from './hooks/useFetch'

function App() {
  const [posts] = useFetch('https://jsonplaceholder.typicode.com/posts')
  const [users] = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <div>
      <Header />
      <Posts posts={posts} users={users} />
    </div>
  )
}

export default App
