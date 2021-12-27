<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todoItem.done"
        @change="handleChange(todoItem.id, $event)"
      />
      <span>{{ todoItem.name }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todoItem.id)">删除</button>
  </li>
</template>

<script setup>
import { useTodoState } from '../stores/todo'

const todo = useTodoState()
defineProps({
  todoItem: {
    type: Object,
    default: () => {}
  }
})

// 勾选、取消勾选某一个todo的回调
const handleChange = (id, $event) => {
  todo.updateTodo(id, $event.target.checked)
}

// 删除一个todo的回调
const handleDelete = (id) => {
  todo.deleteTodo(id)
}
</script>

<style lang="less">
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;

  &:hover {
    background-color: #ddd;

    button {
      display: block !important;
    }
  }

  &:before {
    content: initial;
  }

  &:last-child {
    border-bottom: none;
  }

  label {
    float: left;
    cursor: pointer;

    input {
      vertical-align: middle;
      margin-right: 6px;
      position: relative;
      top: -1px;
    }
  }

  button {
    display: none !important;
    float: right;
    display: none;
    margin-top: 3px;
  }
}
</style>
