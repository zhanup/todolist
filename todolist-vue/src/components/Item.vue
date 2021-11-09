<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCkeck(todo.id, $event)" />
      <span>{{todo.name}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'Item',
  props: ['todo'],
  methods: {
    // 勾选、取消勾选某一个todo的回调
    handleCkeck(id, $event) {
      this.$emit('updateTodo', id, $event.target.checked)
    },
    // 删除一个todo的回调
    handleDelete(id) {
      this.$emit('deleteTodo', id)
    }
  }
}
</script>

<style>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li:hover {
  background-color: #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  display: none !important;
  float: right;
  display: none;
  margin-top: 3px;
}

li:hover button {
  display: block !important;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>