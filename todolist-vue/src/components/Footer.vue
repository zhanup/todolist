<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" :checked="isChecked" @change="handleCheackAll" />
    </label>
    <span><span>已完成{{doneCount}}</span> / 全部{{total}}</span>
    <button class="btn btn-danger" @click="handleCLearAllDone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: ['todos'],
  computed: {
    total() {
      return this.todos.length
    },
    doneCount() {
      return this.todos.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0)
      }, 0)
    },
    isChecked() {
      return this.doneCount === this.total && this.total !== 0
    }
  },
  methods: {
    //全选checkbox的回调
    handleCheackAll($event) {
      this.$emit('checkAllTodo', $event.target.checked)
    },
    // 清除所有已完成
    handleCLearAllDone() {
      this.$emit('clearAllDone')
    }
  }
}
</script>

<style>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>