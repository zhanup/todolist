import { useDispatch } from 'react-redux'
import { updateTodo, deleteTodo } from '../../redux/actions'
import './index.css'

const Item = (props) => {
  const { id, name, done } = props
  const dispatch = useDispatch()

  // 勾选、取消勾选某一个todo的回调
  const handleCkeck = (id) => {
    return (event) => {
      const done = event.target.checked
      dispatch(updateTodo({id, done}))
    }
  }

  // 删除一个todo的回调
  const handleDelete = (id) => {
    dispatch(deleteTodo({id}))
  }

  return (
    <li>
      <label>
        <input type="checkbox" checked={done} onChange={handleCkeck(id)} />
        <span>{name}</span>
      </label>
      <button className="btn btn-danger" onClick={() => handleDelete(id)}>删除</button>
    </li>
  )
}

export default Item