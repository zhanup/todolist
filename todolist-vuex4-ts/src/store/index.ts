import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore  } from 'vuex'
import mutations from './mutations'
import getters from './getters'
import { State } from '@/types'

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

const state = {
  todos: [
    { id: '001', name: '吃饭', done: true },
    { id: '002', name: '睡觉', done: true },
    { id: '003', name: '打代码', done: false }
  ]
}

export default createStore<State>({
  state,
  mutations,
  getters
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}

