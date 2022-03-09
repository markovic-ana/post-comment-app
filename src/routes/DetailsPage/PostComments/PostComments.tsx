import { useEffect, useState } from 'react'
import PostCommentsstyles from './PostComments.module.css'
import { useParams } from 'react-router'
import useFetch from '../../../utils/useFetch'
import React from 'react'

const PostComments = () => {
  const [comments, setComments] = useState([])
  const params = useParams() as any
  let [commentsData, loading] = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
  ) as any

  useEffect(() => {
    if (!loading) {
      setComments(commentsData)
    }
  }, [commentsData, loading])

  if (!comments) {
    ;<p>...Loading</p>
  }

  if (comments) {
    return (
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p className={PostCommentsstyles.comment}>{comment.body}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default PostComments
