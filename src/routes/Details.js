import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch.js'

const Details = () => {
  const [post, setPost] = useState({})

  let params = useParams()
  let data = useFetch(
    `https://jsonplaceholder.typicode.com/posts?id=${params.id}`
  )

  useEffect(() => {
    setPost(data[0])
  }, [])

  return (
    <div>
      <h1>{post[0].title}</h1>
      <p>{post[0].body}</p>
    </div>
  )
}

export default Details
