import React from 'react'
import Poststyles from './Post.module.css'
import useFetch from '../../../utils/useFetch'
import { useEffect, useState } from 'react'
import { CommentProps } from '../../../types/CommentTypes'
import { PostProps } from '../../../types/PostTypes'

const Post = ({ post }: PostProps) => {
  const [comments, setComments] = useState<CommentProps[]>([])
  const [commentsData, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/comments'
  ) as any

  useEffect(() => {
    if (!loading) {
      setComments(commentsData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const commentsOnPost = comments.filter(
      (comment: CommentProps) => comment.postId === post.id
    )

    if (!loading) {
      setComments(commentsOnPost)
    }
  }, [comments, loading, post.id])

  if (loading && post && comments) {
    ;<p>...Loading</p>
  }
  if (comments)
    return (
      <div className={Poststyles.post}>
        <h2 className={Poststyles.title}>{post.title}</h2>
        <p className={Poststyles.text}>{post.body}</p>

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
