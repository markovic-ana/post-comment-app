import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostProps } from '../../types/PostTypes'
import useFetch from '../../utils/useFetch'
import Detailsstyles from './Details.module.css'
import { UserProps } from '../../types/UserTypes'
import PostComments from './PostComments/PostComments'

const Details = () => {
  const [post, setPost] = useState<PostProps>({})
  const [user, setUser] = useState<UserProps>({})

  let params = useParams() as any
  let postData,
    loading = useFetch(
      `https://jsonplaceholder.typicode.com/posts?id=${params.id}`
    )
  let [usersData] = useFetch(
    `https://jsonplaceholder.typicode.com/users`
  ) as any

  useEffect(() => {
    if (!loading) {
      setPost(postData[0])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const author = usersData.find((user: UserProps) => user.id === post.userId)

    if (!loading) {
      setUser(author)
    }
  }, [usersData, post.userId, loading])

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
