export interface CommentProps {
  postId?: number
  id?: number
  name?: string
  body?: string
  comments?: CommentProps[]
}
