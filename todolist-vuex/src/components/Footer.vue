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
import { CHECK_ALL_TODO, CLEAR_ALL_DONE } from '../store/mutation-types';

export default {
  name: 'Footer',
  computed: {
    todos() {
      return this.$store.state.todos
    },
    total() {
      return this.$store.getters.total
    },
    doneCount() {
      return this.$store.getters.doneCount
    },
    isChecked() {
      return this.doneCount === this.total && this.total !== 0
    }
  },
  methods: {
    //全选checkbox的回调
    handleCheackAll($event) {
      this.$store.commit(CHECK_ALL_TODO, $event.target.checked)
    },
    // 清除所有已完成
    handleCLearAllDone() {
      this.$store.commit(CLEAR_ALL_DONE)
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