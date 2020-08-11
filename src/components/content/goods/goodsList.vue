<!-- 商品展示 -->
<template>
  <div class="goods">
    <goodsListItemsVue v-for="(items,index) in goods" :key="index" :goodsItem="items" />
  </div>
</template>

<script>
import goodsListItemsVue from "./goodsListItems.vue";
export default {
  name: "goodsList",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
      required: true,
    },
  },
  components: {
    goodsListItemsVue,
  },
  methods: {},
};
</script>
<style scoped>
  .goods{
    display: flex;
    flex-flow: row wrap;
  }
</style>