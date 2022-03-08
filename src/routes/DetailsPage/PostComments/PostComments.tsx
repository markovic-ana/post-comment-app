import { useEffect, useState } from 'react'
import PostCommentsstyles from './PostComments.module.css'
import { CommentProps } from '../../../types/CommentTypes'
import { useParams } from 'react-router'
import useFetch from '../../../utils/useFetch'
import React from 'react'

const PostComments = () => {
  const [comments, setComments] = useState<CommentProps[]>([])
  const params = useParams() as any
  let commentsData,
    loading = useFetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
    )

  useEffect(() => {
    if (!loading) {
      setComments(commentsData)
    }
  }, [commentsData, loading])

  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p className={PostCommentsstyles.comment}>{comment.body}</p>
        </div>
      ))}
    </>
  )
}

export default PostComments
