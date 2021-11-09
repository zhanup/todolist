import React, { useState } from 'react';
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
  const addTodo = (todoObj) => {
    setTodos([...todos, todoObj]);
  }

  // updateTodo用于更新一个todo对象
  const updateTodo = (id, done) => {
    const newTodos = todos.map(item => item.id === id ? {...item, done} : item)
    setTodos(newTodos)
  }

  // deleteTodo用于删除一个todo对象
  const deleteTodo = (id) => {
    const newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
  }

  // checkAllTodo用于全选
  const checkAllTodo = (done) => {
    const newTodos = todos.map(item => ({...item, done}))
    setTodos(newTodos)
  }

  // clearAllDone清除所有已完成
  const clearAllDone = () => {
    const newTodos = todos.filter(item => item.done === false)
    setTodos(newTodos)
  }

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header addTodo={addTodo}  />
        <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        <Footer todos={todos} checkAllTodo={checkAllTodo} clearAllDone={clearAllDone} />
      </div>
    </div>
  )
}

export default App
