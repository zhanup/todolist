import './index.css';

const Item = (props) => {
  const { id, name, done, updateTodo, deleteTodo } = props

  // 勾选、取消勾选某一个todo的回调
  const handleCkeck = (id) => {
    return (event) => {
      updateTodo(id, event.target.checked)
    }
  }

  // 删除一个todo的回调
  const handleDelete = (id) => {
    deleteTodo(id)
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