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

<script setup>
import { ref } from 'vue'
import { nanoid } from 'nanoid'
import { useTodoState } from '../stores/todo'

const todo = useTodoState()
const task = ref('')

const handleEnter = () => {
  if (task.value.trim() === '') {
    alert('输入不能为空')
    return
  }
  const todoObj = { id: nanoid(), name: task.value, done: false }
  todo.addTodo(todoObj)
  task.value = ''
}
</script>

<style lang="less">
.todo-header {
  input {
    width: 560px;
    height: 28px;
    box-sizing: content-box;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;

    &:focus {
      outline: none;
      border-color: rgba(82, 168, 236, 0.8);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(82, 168, 236, 0.6);
    }
  }
}
</style>
