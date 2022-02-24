import { useSearchParams, Link } from 'react-router-dom'
import Searchstyles from './Posts.module.css'
import useFetch from '../hooks/useFetch'

const Posts = ({ posts }) => {
  let [searchParams, setSearchParams] = useSearchParams()

  return (
    <div>
      <div className={Searchstyles.input}>
        <input
          style={{
            width: '100%',
            border: '2px solid green',
          }}
          value={searchParams.get('posts') || ''}
          placeholder="Searching for a review?"
          onChange={(event) => {
            let posts = event.target.value
            if (posts) {
              setSearchParams({ posts })
            } else {
              setSearchParams({})
            }
          }}
        />
      </div>
      <div className={Searchstyles.results}>
        {posts
          .filter((post) => {
            let posts = searchParams.get('posts')
            if (!posts) return true
            let title = post.title.toLowerCase()
            return title.startsWith(posts.toLowerCase())
          })
          .map((post) => (
            <div>
              <Link
                to={`/posts/${post.id}`}
                key={post.id}
                style={{
                  padding: '0',
                  margin: '0',
                  textAlign: 'left',
                  fontFamily: 'sans-serif',
                  paddingLeft: '-20px',
                }}
              >
                {post.title}
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Posts
