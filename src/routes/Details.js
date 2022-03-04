import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../utils/useFetch.js'
import Comments from './Comments.js'
import Detailsstyles from './Details.module.css'

const Details = () => {
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [user, setUser] = useState({})

  let params = useParams()
  let [postData, loading] = useFetch(
    `https://jsonplaceholder.typicode.com/posts?id=${params.id}`
  )
  let [commentsData] = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
  )
  let [usersData] = useFetch(`https://jsonplaceholder.typicode.com/users`)

  useEffect(() => {
    if (!loading) {
      setPost(postData[0])
      setComments(commentsData)
    }
  }, [postData, commentsData, usersData, loading])

  useEffect(() => {
    const author = usersData.find((user) => user.id === post.userId)

    if (!loading) {
      setUser(author)
    }
  }, [usersData, post.userId, loading])

  if (!post) {
    return <h1>Loading...</h1>
  }
  if (post) {
    return (
      <div key={post.id}>
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
