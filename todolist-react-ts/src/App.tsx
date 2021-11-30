import React, { useState, useCallback } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([
    { id: '001', name: '吃饭', done: true },
    { id: '002', name: '睡觉', done: true },
    { id: '003', name: '打代码', done: false }
  ])

  // addTodo用添加一个todo，接收的参数是todo对象
  const addTodo = useCallback((todoObj) => {
    setTodos((todos) => [...todos, todoObj])
  }, [])

  // updateTodo用于更新一个todo对象
  const updateTodo = useCallback((id, done) => {
    setTodos((todos) =>
      todos.map((item) => (item.id === id ? { ...item, done } : item))
    )
  }, [])

  // deleteTodo用于删除一个todo对象
  const deleteTodo = useCallback((id) => {
    setTodos((todos) => todos.filter((item) => item.id !== id))
  }, [])

  // checkAllTodo用于全选
  const checkAllTodo = useCallback((done) => {
    setTodos((todos) => todos.map((item) => ({ ...item, done })))
  }, [])

  // clearAllDone清除所有已完成
  const clearAllDone = useCallback(() => {
    setTodos((todos) => todos.filter((item) => item.done === false))
  }, [])

  return (
    <div className='todo-container'>
      <div className='todo-wrap'>
        <Header addTodo={addTodo} />
        <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        <Footer
          todos={todos}
          checkAllTodo={checkAllTodo}
          clearAllDone={clearAllDone}
        />
      </div>
    </div>
  )
}

export default App
