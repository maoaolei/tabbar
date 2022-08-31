<template>
<div id="app">
  <my-header color="white" title="Tabbar" background="pink"></my-header>
  <component :is="componentName"></component>
  <my-footer :list="tabList" @changeFn="componentName=$event"></my-footer>

</div>
</template>

<script>
import MyHeader from 'cpns/MyHeader.vue'
import MyFooter from 'cpns/MyFooter.vue'
import MyGoodsList from '@/views/MyGoodsList'
import MyGoodsSearch from '@/views/MyGoodsSearch'
import MyUserInfo from '@/views/MyUserInfo'
export default {
  data() {
    return {
      componentName: 'MyGoodsList',
      tabList: [
    {
        iconText: "icon-shangpinliebiao",
        text: "商品列表",
        componentName: "MyGoodsList"
    },
    {
        iconText: "icon-sousuo",
        text: "商品搜索",
        componentName: "MyGoodsSearch"
    },
    {
        iconText: "icon-user",
        text: "我的信息",
        componentName: "MyUserInfo"
    }
]
    }
  },
  components: {
    MyHeader,
    MyFooter,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo
  },

}
</script>

<style>
#app {
  padding: 45px 0 50px;
}
</style>
