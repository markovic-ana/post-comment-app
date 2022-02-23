import React from 'react'
import Poststyles from './Post.module.css'

export const Post = ({ title, body, userId }) => {
  return (
    <div className={Poststyles.post}>
      <h2 className={Poststyles.title}>{title}</h2>
      <p className={Poststyles.text}>{body}</p>
      <span className={Poststyles.author}>{userId}</span>
      <a className={Poststyles.link} href="bla">
        View post
      </a>
    </div>
  )
}
