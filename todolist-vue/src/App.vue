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

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    List,
    Footer
  },
  data() {
    return {
      todos: [
        { id: '001', name: '吃饭', done: true },
        { id: '002', name: '睡觉', done: true },
        { id: '003', name: '打代码', done: false }
      ]
    }
  },
  methods: {
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
      const newTodos = this.todos.filter(item => item.done === false)
      this.todos = newTodos
    }
  }
}
</script>

<style>
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
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
