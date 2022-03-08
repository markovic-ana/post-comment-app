import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostProps } from '../../types/PostTypes'
import useFetch from '../../utils/useFetch'
import Detailsstyles from './Details.module.css'
import { UserProps } from '../../types/UserTypes'
import { CommentProps } from '../../types/CommentTypes'
// import PostCommentsstyles from './PostComments.module.css'

const Details = () => {
  const [post, setPost] = useState<PostProps>({})
  const [user, setUser] = useState<UserProps>({})
  const [comments, setComments] = useState<CommentProps[]>([])
  let params = useParams()

  let commentsData,
    loading = useFetch(
      `https://jsonplaceholder.typicode.com/posts/${
        (params as any).id
      }/comments`
    )
  let [postData] = useFetch(
    `https://jsonplaceholder.typicode.com/posts?id=${(params as any).id}`
  )
  let usersData = useFetch(`https://jsonplaceholder.typicode.com/users`) as any

  useEffect(() => {
    if (!loading) {
      setPost(postData[0])
      setUser(usersData)
      setComments(commentsData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (post && usersData) {
      const author = usersData.find(
        (user: UserProps) => user.id === post.userId
      )

      if (!loading) {
        setUser(author)
      }
    }
  }, [loading, post, post.userId, usersData])

  if (!post) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <div key={post.id}>
        <h2 className={Detailsstyles.title}>{post.title}</h2>
        <p className={Detailsstyles.post}>{post.body}</p>
        <p className={Detailsstyles.author}> -{user.name}</p>
        <h2 className={Detailsstyles.commentTitle}>
          What our readers are saying:
        </h2>
      </div>
      <div>
        {comments.map((comment: CommentProps) => (
          <div key={comment.id}>
            <p className={Detailsstyles.comment}>{comment.body}</p>
          </div>
        ))}
      </div>
      {/* <PostComments /> */}
    </div>
  )
}

export default Details
