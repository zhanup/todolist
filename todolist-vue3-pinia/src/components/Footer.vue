<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" :checked="todo.isChecked" @change="handleCheckAll" />
    </label>
    <span>
      <span>已完成{{ todo.doneCount }}</span> / 全部{{ todo.total }}
    </span>
    <button class="btn btn-danger" @click="todo.clearAllDone">
      清除已完成任务
    </button>
  </div>
</template>

<script setup>
import { useTodoState } from '../stores/todo'

const todo = useTodoState()

//全选checkbox的回调
const handleCheckAll = ($event) => {
  todo.checkAllTodo($event.target.checked)
}
</script>

<style lang="less">
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;

  label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;

    input {
      position: relative;
      top: -1px;
      vertical-align: middle;
      margin-right: 5px;
    }
  }

  button {
    float: right;
    margin-top: 5px;
  }
}
</style>
