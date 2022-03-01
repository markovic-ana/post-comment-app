import React from 'react'
import { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const Comments = () => {
  const [comments, setComments] = useState([])
  const [commentsData, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/comment'
  )

  useEffect(() => {
    if (!loading) {
      setComments(commentsData)
    }
  }, [])

  if (!comments) {
    return <p>...Loading</p>
  }

  return comments.map((comment) => <div>{comment.body}</div>)
}

export default Comments
