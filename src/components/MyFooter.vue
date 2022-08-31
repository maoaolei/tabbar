<template>
  <div class="my-tab-bar">
  	<div
    v-for="(item,index) in list"
    :key="index"
    :class="['tab-item',{current:active===index}]"
    @click="[(active=index),$emit('changeFn',item.componentName)]"
    >
      <!-- 图标 -->
      <span :class="`iconfont ${item.iconText}`"></span>
      <!-- 文字 -->
      <span>{{item.text}}</span>
    </div>
  </div>
</template>

<script>
//validator:自定义校验器
//validator(val) {} 需要返回boolean true代表成功 false失败
//val : 校验的数据
export default {
  data() {
    return {
      active: 0,
    }

  },
  props: {
    list: {
      type: Array,
      required: true,
      validator(val) {
        const len = val.length
        if (len <= 4 && len >= 0) {
          return true
        }
        throw new Error('list长度应在0-4之间')
      }
    }
  },




}
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: #1d7bff;
  .iconfont {
    color: #1d7bff;
  }
}
</style>
