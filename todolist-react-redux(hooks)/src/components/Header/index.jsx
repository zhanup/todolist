import React from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { addTodo } from '../../redux/actions'
import './index.css'

const Header = () => {
  const dispatch = useDispatch()

  const handleKeyUp = (event) => {
    const { keyCode, target } = event
    // 判断是否是回车
    if (keyCode !== 13) return
    if (target.value.trim() === '') {
      alert('输入不能为空')
      return
    }
    const todoObj = { id: nanoid(), name: target.value, done: false }
    dispatch(addTodo(todoObj))
    target.value = ''
  }

  return (
    <div className="todo-header">
      <input onKeyUp={handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
    </div>
  )
}

export default Header