<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header @addTodo="addTodo" />
        <List :todos="todos" @updateTodo="updateTodo" @deleteTodo="deleteTodo" />
        <Footer :todos="todos" @checkAllTodo="checkAllTodo" @clearAllDone="clearAllDone" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
import { Todo } from './types'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    List,
    Footer
  },
  setup() {
    let todos = reactive<Todo[]>([
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打代码', done: false }
    ])

    // addTodo用添加一个todo，接收的参数是todo对象
    const addTodo = (todoObj: Todo): void => {
      todos.push(todoObj)
    }

    // updateTodo用于更新一个todo对象
    const updateTodo = (id: string, done: boolean): void => {
      todos.forEach(item => item.id === id ? item.done = done : null)
    }

    // deleteTodo用于删除一个todo对象
    const deleteTodo = (id: string): void => {
      const index = todos.findIndex(item => item.id == id)
      todos.splice(index, 1)
    }

    // checkAllTodo用于全选
    const checkAllTodo = (done: boolean): void => {
      todos.forEach(item => item.done = done)
    }
    
    // clearAllDone清除所有已完成
    const clearAllDone = (): void => {
      const newTodos = todos.filter(item => item.done === false)
      todos = newTodos
    }

    return {
      todos,
      addTodo,
      updateTodo,
      deleteTodo,
      checkAllTodo,
      clearAllDone
    }
  }
})
</script>

<style lang="less">
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;

  &:focus {
    outline: none;
  }
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;

  &:hover {
    color: #fff;
    background-color: #bd362f;
  }
}

.todo-container {
  width: 600px;
  margin: 0 auto;

  .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
}
</style>
