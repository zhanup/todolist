import Item from '../Item'
import './index.css';

interface Todo {
  id: string
  name: string
  done: boolean
}

interface Props {
  todos: Array<Todo>
  updateTodo(id: string, done: boolean): void
  deleteTodo(id: string): void
}

const List = (props: Props) => {
  const { todos, updateTodo, deleteTodo } = props
    
  return (
    <ul className="todo-main">
      {
        todos.map(item => {
          return <Item key={item.id} {...item} updateTodo={updateTodo} deleteTodo={deleteTodo}  />
        })
      }
    </ul>
  )
}

export default List