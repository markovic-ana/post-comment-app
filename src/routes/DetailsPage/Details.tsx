import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostProps } from '../../types/PostTypes'
import useFetch from '../../utils/useFetch'
import Detailsstyles from './Details.module.css'
import { UserProps } from '../../types/UserTypes'
import PostComments from './postComments/PostComments'
// import PostCommentsstyles from './PostComments.module.css'

const Details = () => {
  const [post, setPost] = useState<PostProps>({})
  const [user, setUser] = useState<UserProps>({})

  let params = useParams() as any

  let [postData] = useFetch(
    `https://jsonplaceholder.typicode.com/posts?id=${params.id}`
  ) as any
  let [usersData] = useFetch(
    `https://jsonplaceholder.typicode.com/users`
  ) as any

  useEffect(() => {
    if (postData.length > 0) setPost(postData[0])
  }, [postData])

  useEffect(() => {
    const author = usersData.find(
      (user: { id: number }) => user.id === post.userId
    )

    if (usersData.length > 0) {
      setUser(author)
    }
  }, [post.userId, usersData])

  if (!post) {
    return <h1>Loading...</h1>
  }
  if (post) {
    return (
      <div>
        <div key={post.id}>
          <h2 className={Detailsstyles.title}>{post?.title}</h2>
          <p className={Detailsstyles.post}>{post?.body}</p>
          <p className={Detailsstyles.author}> -{user?.name}</p>
          <h2 className={Detailsstyles.commentTitle}>
            What our readers are saying:
          </h2>
        </div>
        <PostComments />
      </div>
    )
  }
}

export default Details
