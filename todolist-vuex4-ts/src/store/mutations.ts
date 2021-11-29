import { Todo, State } from '../types'

import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  CHECK_ALL_TODO,
  CLEAR_ALL_DONE
} from './mutation-types'

const mutations = {
  // 添加一个todo，接收的参数是todo对象
  [ADD_TODO](state: State, payload: Todo) {
    state.todos.push(payload)
  },
  // 更新一个todo对象
  [UPDATE_TODO](state: State, payload: Todo) {
    const { id, done } = payload
    state.todos.forEach((item: Todo) => item.id === id ? item.done = done : null)
  },
  // 删除一个todo对象
  [DELETE_TODO](state: State, id: string) {
    const index = state.todos.findIndex((item: Todo) => item.id == id)
    state.todos.splice(index, 1)
  },
  // 全选
  [CHECK_ALL_TODO](state: State, done: boolean) {
    state.todos.forEach((item: Todo) => item.done = done)
  },
  // 清除所有已完成
  [CLEAR_ALL_DONE](state: State) {
    const newTodos = state.todos.filter((item: Todo) => item.done === false)
    state.todos = newTodos
  }
}

export default mutations
