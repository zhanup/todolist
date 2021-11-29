<template>
  <ul class="todo-main">
    <Item
      v-for="item in todos"
      :key="item.id"
      :todo="item"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import Item from './Item.vue'

export default defineComponent ({
  name: 'List',
  components: { Item },
  setup() {
    const store = useStore()

    return {
      todos: computed(() => store.state.todos)
    }
  }
})
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