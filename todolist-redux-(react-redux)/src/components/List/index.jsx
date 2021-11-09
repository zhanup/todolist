import { connect } from 'react-redux'
import Item from '../Item'
import './index.css';

const List = (props) => {
  const { todos } = props
   
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

export default connect(
  state => ({todos: state}),
  {}
)(List)