<template>
  <div class="todo-header">
    <input 
      @keyup.enter="handleEnter" 
      v-model="task" 
      type="text" 
      placeholder="请输入你的任务名称，按回车键确认"
    />
  </div>
</template>

<script>
import { nanoid } from 'nanoid';
import { ADD_TODO } from '../store/mutation-types';

export default {
  name: 'Header',
  props: ['addTodo'],
  data() {
    return {
      task: ''
    }
  },
  methods: {
    handleEnter() {
      if (this.task.trim() === '') {
        alert('输入不能为空')
        return
      }
      const todoObj = {id: nanoid(), name: this.task, done: false}
      this.$store.commit(ADD_TODO, todoObj)
      this.task = ''
    }
  }
}
</script>

<style>
.todo-header input {
  width: 560px;
  height: 28px;
  box-sizing: content-box;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>