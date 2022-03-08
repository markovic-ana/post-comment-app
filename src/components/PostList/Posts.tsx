import Post from './Post/Post'
import { Link } from 'react-router-dom'
import { useSearchParams } from '../../../node_modules/react-router-dom/index.js'
import useFetch from '/Users/ana/Documents/Projects/Post-Comment-TypeScript-App/post-comment-app/src/utils/useFetch'
import React, { useState, useEffect } from 'react'
import { PostProps } from '../../types/PostTypes'

const Posts = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [posts, setPosts] = useState<PostProps[]>([])
  let [postsData, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  ) as any

  useEffect(() => {
    if (!loading) {
      setPosts(postsData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!posts) {
    return <div>...Loading</div>
  }
  if (posts)
    return (
      <div>
        <div>
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
        {posts
          .filter((post) => {
            let posts = searchParams.get('posts')
            if (!posts) return true
            let title = post.title.toLowerCase()
            return title.startsWith(posts.toLowerCase())
          })
          .map((post) => (
            <div key={post.id}>
              <Link to={`/posts/${post.id}`} key={post.id}>
                <Post id={post.id} title={post.title} body={post.body} />
              </Link>
            </div>
          ))}
      </div>
    )
}

export default Posts
