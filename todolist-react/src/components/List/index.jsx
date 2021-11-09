import Item from '../Item'
import './index.css';

const List = (props) => {
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