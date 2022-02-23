import React from 'react'
import { useState, useEffect } from 'react'

const Comments = () => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    requestComments()
  }, [])

  async function requestComments() {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/comments'
    )
    const json = await response.json()
    setComments(json)
  }
  return comments.map((comment) => <div>{comment.body}</div>)
}

export default Comments
