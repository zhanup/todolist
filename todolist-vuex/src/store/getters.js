const getters = {
  total(state) {
    return state.todos.length
  },
  doneCount(state) {
    return state.todos.reduce((pre, current) => {
      return pre + (current.done ? 1 : 0)
    }, 0)
  }
}

export default getters