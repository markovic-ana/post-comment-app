import './App.css'
import Header from './components/Header'
import Posts from './components/Posts'
import useFetch from './utils/useFetch'

function App() {
  const [posts, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  )
  const [users] = useFetch('https://jsonplaceholder.typicode.com/users')

  if (!posts) {
    return <div>...Loading</div>
  }
  if (posts) {
    return (
      <div className=".container">
        <Header />
        <Posts posts={posts} users={users} />
      </div>
    )
  }
}

export default App
