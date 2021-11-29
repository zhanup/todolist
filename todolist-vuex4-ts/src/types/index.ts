export interface Todo {
  id: string
  name: string
  done: boolean
}

export interface State {
  todos: Array<Todo>
}
