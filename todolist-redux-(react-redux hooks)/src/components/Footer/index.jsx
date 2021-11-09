import { useSelector, useDispatch } from 'react-redux'
import { checkAllTodo, clearAllDone } from '../../redux/actions'
import './index.css';

const Footer = () => {
  const todos = useSelector(state => state)
  const dispatch = useDispatch()
  const total = todos.length
  const doneCount = todos.reduce((pre, current) => {
    return pre + (current.done ? 1 : 0)
  }, 0)

  //全选checkbox的回调
  const handleCheackAll = (event) => {
    dispatch(checkAllTodo({done: event.target.checked}))
  }

  // 清除所有已完成
  const handleCLearAllDone = () => {
    dispatch(clearAllDone())
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