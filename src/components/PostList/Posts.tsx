import Post from './post/Post'
import { Link } from 'react-router-dom'
import { useSearchParams } from '../../../node_modules/react-router-dom/index.js'
import useFetch from '/Users/ana/Documents/Projects/Post-Comment-TypeScript-App/post-comment-app/src/utils/useFetch'
import React, { useState, useEffect } from 'react'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  const [postsData] = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  ) as any

  useEffect(() => {
    if (postsData.length > 0) {
      setPosts(postsData)
    }
  }, [postsData])

  return (
    <div>
      <input
        style={{
          width: '100%',
          border: '2px solid green',
        }}
        value={searchParams.get('posts') || ''}
        placeholder="Search for a review..."
        onChange={(event) => {
          let posts = event.target.value
          if (posts) {
            setSearchParams({ posts })
          } else {
            setSearchParams({})
          }
        }}
      />
      <span>*click on an article for more details</span>
      {posts
        .filter((post) => {
          let posts = searchParams.get('posts')
          if (!posts) return true
          let title = post.title.toLowerCase()
          return title.startsWith(posts.toLowerCase())
        })
        .map((post) => (
          <div key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
              />
            </Link>
          </div>
        ))}
    </div>
  )
}

export default Posts

//   const [searchParams, setSearchParams] = useSearchParams()
//   const [posts, setPosts] = useState([])
//   let [postsData] = useFetch(
//     `https://jsonplaceholder.typicode.com/posts`
//   ) as any

//   useEffect(() => {
//     if (postsData.length > 0) {
//       setPosts(postsData)
//     }
//   }, [postsData])

//   if (!posts) {
//     return <div>...Loading</div>
//   }
//   if (posts) {
//     return (
//       <div>
//         <input
//           style={{
//             width: '100%',
//             border: '2px solid green',
//           }}
//           value={searchParams.get('posts') || ''}
//           placeholder="Searching for a review?"
//           onChange={(event) => {
//             let posts = event.target.value
//             if (posts) {
//               setSearchParams({ posts })
//             } else {
//               setSearchParams({})
//             }
//           }}
//         />
//         <span style={{ padding: '0', fontSize: '10px' }}>
//           *click on article for more info
//         </span>
//         {posts
//           .filter((post) => {
//             let posts = searchParams.get('posts')
//             if (!posts) return true
//             let title = post.title.toLowerCase()
//             return title.startsWith(posts.toLowerCase())
//           })
//           .map((post) => (
//             <div key={post.id}>
//               <Link to={`/posts/${post.id}`}>
//                 <Post
//                   post={post}
//                   title={post.title}
//                   body={post.body}
//                   key={post.id}
//                   id={post.id}
//                   userId={post.userId}
//                 />
//               </Link>
//             </div>
//           ))}
//       </div>
//     )
//   }
// }

// export default Posts
