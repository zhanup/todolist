import { useState } from 'react'
import store from '../../redux/store'
import { checkAllTodo, clearAllDone } from '../../redux/actions'
import './index.css';

const Footer = () => {
  const [todos, setTodos] = useState(store.getState())
  const total = todos.length
  const doneCount = todos.reduce((pre, current) => {
    return pre + (current.done ? 1 : 0)
  }, 0)

  // 监听store变化
  store.subscribe(()=>{
    setTodos(store.getState())
  })

  //全选checkbox的回调
  const handleCheackAll = (event) => {
    const done = event.target.checked
    store.dispatch(checkAllTodo({ done }))
  }

  // 清除所有已完成
  const handleCLearAllDone = () => {
    store.dispatch(clearAllDone())
  }

  return (
    <div className="todo-footer">
      <label>
        <input type="checkbox" checked={doneCount === total && total !== 0} onChange={handleCheackAll} />
      </label>
      <span>
					<span>已完成{doneCount}</span> / 全部{total}
				</span>
				<button className="btn btn-danger" onClick={handleCLearAllDone}>清除已完成任务</button>
    </div>
  )
}

export default Footer