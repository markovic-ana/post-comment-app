import React, { FunctionComponent } from 'react'
import Poststyles from './Post.module.css'
import useFetch from '../../../utils/useFetch'
import { useEffect, useState } from 'react'
import { CommentProps } from '../../../types/CommentTypes'
import { PostProps } from '../../../types/PostTypes'

const Post: FunctionComponent<PostProps> = ({ title, body, id }) => {
  const [comments, setComments] = useState<CommentProps[]>([])
  const [commentsData, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/comments'
  ) as any

  useEffect(() => {
    if (!loading) {
      setComments(commentsData)
    }
  }, [])

  useEffect(() => {
    const commentsOnPost = commentsData.filter(
      (comment: { postId: number }) => comment.postId === id
    )

    if (!loading) {
      setComments(commentsOnPost)
    }
  }, [comments, commentsData, loading, id])

  if (loading) {
    ;<p>...Loading</p>
  }

  return (
    <div>
      <div className={Poststyles.post} key={id}>
        <h2 className={Poststyles.title}>{title}</h2>
        <p className={Poststyles.text}>{body}</p>
        <h3 className={Poststyles.commentTitle}>comments:</h3>
        <div>
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
      </div>
    </div>
  )
}

export default Post
