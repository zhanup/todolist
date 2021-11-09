import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  CHECK_ALL_TODO,
  CLEAR_ALL_DONE
} from './mutation-types'

const mutations = {
  // 添加一个todo，接收的参数是todo对象
  [ADD_TODO](state, payload) {
    state.todos.push(payload)
  },
  // 更新一个todo对象
  [UPDATE_TODO](state, payload) {
    const { id, done } = payload
    state.todos.forEach(item => item.id === id ? item.done = done : null)
  },
  // 删除一个todo对象
  [DELETE_TODO](state, id) {
    const index = state.todos.findIndex(item => item.id == id)
    state.todos.splice(index, 1)
  },
  // 全选
  [CHECK_ALL_TODO](state, done) {
    state.todos.forEach(item => item.done = done)
  },
  // 清除所有已完成
  [CLEAR_ALL_DONE](state) {
    const newTodos = state.todos.filter(item => item.done === false)
    state.todos = newTodos
  }
}

export default mutations