<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCkeck(todo.id, $event)"
      />
      <span>{{ todo.name }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store'
import { UPDATE_TODO, DELETE_TODO } from '../store/mutation-types'

export default defineComponent({
  name: 'Item',
  props: ['todo'],
  setup() {
    const store = useStore()

    // 勾选、取消勾选某一个todo的回调
    const handleCkeck = (id: string, $event: any): void => {
      store.commit(UPDATE_TODO, id, $event.target.checked)
    }

    // 删除一个todo的回调
    const handleDelete = (id: string): void => {
      store.commit(DELETE_TODO, id)
    }

    return {
      handleCkeck,
      handleDelete
    }
  }
})
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
