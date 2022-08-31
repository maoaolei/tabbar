<template>
 <div>
    <button type="button" class="btn btn-primary btn-sm"
    v-if="isShowBtn"
    @click="isShowBtn=false"
    >+Tag</button>
    <input type="text" v-else
    @blur="addTag"
    v-focus
    v-model.trim="Tag"
    @keyup.enter="addTag"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowBtn: true,
      Tag:''
    }
  },
  methods: {
    addTag() {
      this.isShowBtn=true
      if (this.Tag !== '') {
        this.$emit('add-tags',this.Tag)
      }
      this.Tag=''
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  }

}
</script>

<style>

</style>
