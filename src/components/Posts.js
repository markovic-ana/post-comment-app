// import Postsstyles from './Posts.module.css'
import Post from './Post'

const Posts = ({ posts }) => {
  return posts.map((post) => (
    <Post
      key={post.id}
      id={post.id}
      post={post}
      title={post.title}
      body={post.body}
      userId={post.userId}
    />
  ))
}

export default Posts
