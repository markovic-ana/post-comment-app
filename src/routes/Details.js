import { getDefaultNormalizer } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch.js'
import Comments from './Comments.js'
import Detailsstyles from './Details.module.css'

const Details = () => {
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})

  let params = useParams()
  let [data] = useFetch(
    `https://jsonplaceholder.typicode.com/posts?id=${params.id}`
  )
  let [commentsData] = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
  )
  let [usersData] = useFetch(`https://jsonplaceholder.typicode.com/users`)

  useEffect(() => {
    if (data[0]) {
      setPost(data[0])
    }
    if (commentsData) {
      setComments(commentsData)
    }
    if (usersData) {
      setUsers(usersData)
      const getUser = users.filter((user) => user.id === post.userId)
      if (getUser[0]) {
        return setUser(getUser[0])
      }
    }
  }, [data, commentsData, usersData])

  if (!post) {
    return <h1>Loading...</h1>
  }
  if (post) {
    return (
      <div>
        <h2 className={Detailsstyles.title}>{post?.title}</h2>
        <p className={Detailsstyles.post}>{post?.body}</p>
        <p className={Detailsstyles.author}> -{user?.name}</p>
        <h2 className={Detailsstyles.commentTitle}>
          What our readers are saying:
        </h2>
        <Comments comments={comments} />
      </div>
    )
  }
}

export default Details
