import React, { ChangeEvent } from 'react'

import './index.css'

interface Props {
  id: string
  name: string
  done: boolean
  updateTodo(id: string, done: boolean): void
  deleteTodo(id: string): void
}

const Item = (props: Props) => {
  const { id, name, done, updateTodo, deleteTodo } = props

  // 勾选、取消勾选某一个todo的回调
  const handleCkeck = (id: string) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      updateTodo(id, event.target.checked)
    }
  }

  // 删除一个todo的回调
  const handleDelete = (id: string) => {
    deleteTodo(id)
  }

  return (
    <li>
      <label>
        <input type='checkbox' checked={done} onChange={handleCkeck(id)} />
        <span>{name}</span>
      </label>
      <button className='btn btn-danger' onClick={() => handleDelete(id)}>
        删除
      </button>
    </li>
  )
}

export default Item
