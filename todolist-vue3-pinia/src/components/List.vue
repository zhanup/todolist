<template>
  <ul class="todo-main">
    <Item
      v-for="item in todo.todos"
      :key="item.id"
      :todoItem="item"
    />
  </ul>
</template>

<script setup>
import { useTodoState } from '../stores/todo'
import Item from './Item.vue'

const todo = useTodoState()
</script>

<style lang="less">
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>