import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  CHECK_ALL_TODO,
  CLEAR_ALL_DONE,
} from './actionTypes'

const initState = [
  { id: '001', name: '吃饭', done: true },
  { id: '002', name: '睡觉', done: true },
  { id: '003', name: '打代码', done: false }
]

function reducer(state = initState, action) {
  const { type, data } = action
  const { id, done } = data || {}

  switch (type) {
    case ADD_TODO:
      return [...state, data]
    case UPDATE_TODO:
      return state.map(item => (item.id === id ? {...item, done} : item))
    case DELETE_TODO:
      return state.filter(item => item.id !== id)
    case CHECK_ALL_TODO:
      return state.map(item => ({...item, done}))
    case CLEAR_ALL_DONE:
      return state.filter(item => item.done === false)
    default:
      return state
  }
}

export default reducer
