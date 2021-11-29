import { Todo, State } from '@/types'

const getters = {
  total(state: State): number {
    return state.todos.length
  },
  doneCount(state: State): number {
    return state.todos.reduce((pre: number, current: Todo) => {
      return pre + (current.done ? 1 : 0)
    }, 0)
  }
}

export default getters
