export interface UserProps {
  id?: number
  name?: string
  users?: UserProps[]
  user?: UserProps
}
