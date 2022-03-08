import React from 'react'
import Poststyles from './Post.module.css'
import useFetch from '../../../utils/useFetch'
import { useEffect, useState } from 'react'
import { CommentProps } from '../../../types/CommentTypes'

const Post = ({ id, title, body }) => {
  const [comments, setComments] = useState([])
  const [commentsData, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/comments'
  ) as any

  useEffect(() => {
    if (!loading) {
      setComments(commentsData)
    }
  }, [])

  useEffect(() => {
    const commentsOnPost = comments.filter(
      (comment: CommentProps) => comment.postId === id
    )

    if (!loading) {
      setComments(commentsOnPost)
    }
  }, [commentsData, comments, loading, id])

  return (
    <div className={Poststyles.post}>
      <h2 className={Poststyles.title}>{title}</h2>
      <p className={Poststyles.text}>{body}</p>

      {comments.map((comment) => (
        <div key={comment.id}>
          <p
            style={{
              textAlign: 'left',
              paddingLeft: '0',
            }}
          >
            {comment.body}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Post
