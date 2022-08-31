<template>
  <div>
    <my-table :list="goodsList">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="{good}">
        <td>{{ good.id }}</td>
        <td>{{ good.goods_name }}</td>
        <td>{{ good.goods_price }}</td>
        <td>
          <add-tags @add-tags="good.tags.push($event)"></add-tags>
          <span
          v-for="(item, index) in good.tags"
          :key="index"
          class="badge bg-warning text-dark"
          >{{item}}
        </span>
        </td>
        <td>
            <button class="btn btn-danger btn-sm"
            @click="del(good.id)"
            >删除</button>
        </td>

      </template>
    </my-table>
  </div>
</template>

<script>
import axios from '@/utlis/request';
import MyTable from 'cpns/MyTable.vue'
import AddTags from 'cpns/AddTags.vue';
export default {
  components: {
    MyTable,
    AddTags
  },
  data() {
    return {
      goodsList: []
    }
  },
  created() {
    this.getGoods()
  },
  methods: {
   async getGoods() {
     try {
      const {data}= await axios({url: "/api/goods"})
      this.goodsList=data.data
     } catch (error) {
      alert('刷新重试')
     }
    },
    del(id) {
      this.goodsList=this.goodsList.filter(item => item.id!==id)
    }
  }
};
</script>

<style scoped lang="less">

</style>
