import React, { KeyboardEvent } from 'react'
import { nanoid } from 'nanoid'
import './index.css'

interface Todo {
  id: string
  name: string
  done: boolean
}

interface Props {
  addTodo(todo: Todo): void
}

const Header = (props: Props) => {
  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    const { keyCode, target } = event
    // 判断是否是回车
    if (keyCode !== 13) return
    if ((target as HTMLInputElement).value.trim() === '') {
      alert('输入不能为空')
      return
    }
    const todoObj: Todo = {
      id: nanoid(),
      name: (target as HTMLInputElement).value,
      done: false
    }
    props.addTodo(todoObj)
    ;(target as HTMLInputElement).value = ''
  }

  return (
    <div className='todo-header'>
      <input
        onKeyUp={handleKeyUp}
        type='text'
        placeholder='请输入你的任务名称，按回车键确认'
      />
    </div>
  )
}

export default Header
