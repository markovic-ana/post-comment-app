// /* eslint-disable react-hooks/exhaustive-deps */
// import { useState, useEffect } from 'react'
// import useFetch from '../../utils/useFetch'
// import { CommentProps } from '../../types/CommentTypes'
// import React from 'react'

// const Comments = () => {
//   const [comments, setComments] = useState<CommentProps[]>([])
//   const [commentsData, loading] = useFetch(
//     'https://jsonplaceholder.typicode.com/comment'
//   ) as any

//   useEffect(() => {
//     if (!loading) {
//       setComments(commentsData)
//     }
//   }, [])

//   if (!comments) {
//     return <p>...Loading</p>
//   }
//   if (comments) {
//     return (
//       <div>
//         {comments.map((comment) => (
//           <div>{comment.body}</div>
//         ))}
//       </div>
//     )
//   }
// }

// export default Comments
