import { defineStore } from 'pinia'

export const useTodoState = defineStore('todos', {
  state: () => ({
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打代码', done: false }
    ]
  }),
  getters: {
    // 任务总数
    total(state) {
      return state.todos.length
    },
    // 完成的任务
    doneCount(state) {
      return state.todos.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0)
      }, 0)
    },
    // 是否选中
    isChecked() {
      return this.doneCount === this.total && this.total !== 0
    }
  },
  actions: {
    // addTodo用添加一个todo，接收的参数是todo对象
    addTodo(todoObj) {
      this.todos.push(todoObj)
    },
    // updateTodo用于更新一个todo对象
    updateTodo(id, done) {
      this.todos.forEach(item => item.id === id ? item.done = done : null)
    },
    // deleteTodo用于删除一个todo对象
    deleteTodo(id) {
      const index = this.todos.findIndex(item => item.id == id)
      this.todos.splice(index, 1)
    },
    // checkAllTodo用于全选
    checkAllTodo(done) {
      this.todos.forEach(item => item.done = done)
    },
    // clearAllDone清除所有已完成
    clearAllDone() {
      this.todos = this.todos.filter(item => item.done === false)
    }
  }
})
