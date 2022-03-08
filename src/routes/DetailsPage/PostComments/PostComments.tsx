import { useEffect, useState } from 'react'
import PostCommentsstyles from './PostComments.module.css'
import { CommentProps } from '../../../types/CommentTypes'
import { useParams } from 'react-router'
import useFetch from '../../../utils/useFetch'
import React from 'react'

const PostComments = () => {
  const [comments, setComments] = useState([])
  const params = useParams()
  let commentsData,
    loading = useFetch(
      `https://jsonplaceholder.typicode.com/posts/${
        (params as any).id
      }/comments`
    )

  useEffect(() => {
    if (!loading) {
      setComments(commentsData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!comments) {
    ;<p>...Loading</p>
  }

  if (comments)
    return (
      <div>
        {comments.map((comment: CommentProps) => (
          <div key={comment.id}>
            <p className={PostCommentsstyles.comment}>{comment.body}</p>
          </div>
        ))}
      </div>
    )
}

export default PostComments
