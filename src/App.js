import './App.css'
import Header from './components/Header'
import Posts from './components/Posts'
import useFetch from './hooks/useFetch'

function App() {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/posts')
  const [users] = useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <div>
      <Header />
      <Posts posts={data} users={users} />
    </div>
  )
}

export default App
