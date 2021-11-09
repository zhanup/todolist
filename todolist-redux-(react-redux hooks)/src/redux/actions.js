import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  CHECK_ALL_TODO,
  CLEAR_ALL_DONE
} from './actionTypes'

// 接收的参数是data对象
// 添加一个todo
export const addTodo = data => ({type: ADD_TODO, data})

// 删除一个todo对象
export const updateTodo = data => ({type: UPDATE_TODO, data})

//删除一个todo对象 
export const deleteTodo = data => ({type: DELETE_TODO, data})

// 全选
export const checkAllTodo = data => ({type: CHECK_ALL_TODO, data})

// 清除所有已完成
export const clearAllDone = () => ({type: CLEAR_ALL_DONE})

