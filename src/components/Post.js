import React from 'react'
import Poststyles from './Post.module.css'
import { Link } from 'react-router-dom'

const Post = ({ id, title, body, userId }) => {
  return (
    <div className={Poststyles.post}>
      <h2 className={Poststyles.title}>{title}</h2>
      <p className={Poststyles.text}>{body}</p>
      <span className={Poststyles.author}>{userId}</span>
      <Link to={`/posts/${id}`}>View Post</Link>
    </div>
  )
}

export default Post
