import React from 'react'
import Commentsstyles from './Comments.module.css'

const Comments = ({ comments }) => {
  return comments.map((comment) => (
    <div key={comment.id}>
      <p className={Commentsstyles.comment}>{comment.body}</p>
    </div>
  ))
}

export default Comments
