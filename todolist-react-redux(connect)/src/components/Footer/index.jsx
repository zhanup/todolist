import { connect } from 'react-redux'
import { checkAllTodo, clearAllDone } from '../../redux/actions'
import './index.css';

const Footer = (props) => {
  const { todos, checkAllTodo, clearAllDone } = props
  const total = todos.length
  const doneCount = todos.reduce((pre, current) => {
    return pre + (current.done ? 1 : 0)
  }, 0)

  //全选checkbox的回调
  const handleCheackAll = (event) => {
    checkAllTodo({done: event.target.checked})
  }

  // 清除所有已完成
  const handleCLearAllDone = () => {
    clearAllDone()
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

export default connect(
  state => ({todos: state}),
  {checkAllTodo, clearAllDone}
)(Footer)