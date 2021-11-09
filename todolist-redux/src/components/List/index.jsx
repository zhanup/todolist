import { useState } from 'react'
import store from '../../redux/store'
import Item from '../Item'
import './index.css';

const List = () => {
  const [todos, setTodos] = useState(store.getState())

  // 监听store变化
  store.subscribe(()=>{
    setTodos(store.getState())
  })
   
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