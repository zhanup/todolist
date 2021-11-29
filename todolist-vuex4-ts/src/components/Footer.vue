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
import { defineComponent, computed  } from 'vue'
import { useStore } from '@/store'
import { CHECK_ALL_TODO, CLEAR_ALL_DONE } from '../store/mutation-types'

export default defineComponent({
  name: 'Footer',
  setup() {
    const store = useStore()

    //全选checkbox的回调
    const handleCheackAll = ($event: any) => {
      store.commit(CHECK_ALL_TODO, $event.target.checked)
    }

    // 清除所有已完成
    const handleCLearAllDone = () => {
      store.commit(CLEAR_ALL_DONE)
    }
    
    return {
      total: computed(() => store.getters.total),
      doneCount: computed(() => store.getters.doneCount),
      isChecked: computed(() => store.getters.isChecked),
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
