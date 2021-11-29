<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" :checked="isChecked" @change="handleCheackAll" />
    </label>
    <span>
      <span>已完成{{ doneCount }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="handleCLearAllDone">
      清除已完成任务
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, toRefs  } from 'vue'
import { Todo } from '../types'

export default defineComponent({
  name: 'Footer',
  props: {
    todos: {
      type: Array as PropType<Todo[]>,
      default: () => []
    }
  },
  methods: {
    //全选checkbox的回调
    handleCheackAll($event: any) {
      this.$emit('checkAllTodo', $event.target.checked)
    },
    // 清除所有已完成
    handleCLearAllDone() {
      this.$emit('clearAllDone')
    }
  },
  setup(props, context) {
    const todos = props.todos

    // 任务总数
    const total = computed<number>(() => todos.length)

    // 完成的任务
    const doneCount = computed<number>(() => {
      return todos.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0)
      }, 0)
    })

    // 是否选中
    const isChecked = computed<boolean>(() => {
      return doneCount.value === total.value && total.value !== 0
    })

    //全选checkbox的回调
    const handleCheackAll = ($event: any) => {
      context.emit('checkAllTodo', $event.target.checked)
    }

    // 清除所有已完成
    const handleCLearAllDone = () => {
      context.emit('clearAllDone')
    }
    
    return {
      todos,
      total,
      doneCount,
      isChecked,
      handleCheackAll,
      handleCLearAllDone
    }
  }
})
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
