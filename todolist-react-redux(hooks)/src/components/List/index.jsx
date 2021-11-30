import Item from '../Item'
import { useSelector } from 'react-redux'
import './index.css';

const List = (props) => {
  const todos = useSelector(state => state)
   
  return (
    <ul className="todo-main">
      {
        todos.map(item => {
          return <Item key={item.id} {...item} />
        })
      }
    </ul>
  )
}

export default List