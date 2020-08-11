<!-- 商品内容组件 -->
<template>
  <div class="goodItem">
    <img :src="goodsItem.show.img" :alt="goodsItem.title" />
    <div>
      <p>{{goodsItem.title}}</p>
      <div class="num">
        <span>{{goodsItem.price}}</span>
        <span class="cfav">★{{goodsItem.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsListItem",
  data() {
    return {};
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
      required: true,
    },
  },
  methods: {},
};
</script>
<style scoped>
.goodItem {
  width: 48%;
  font-size: 14px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-flow: column;
  margin-left: 2%;
}
.goodItem p {
  padding-top: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.goodItem img {
  width: 96%;
  border-radius: 5px;
}
.num {
  display: flex;
  justify-content: space-around;
  padding-top: 3px;
}
.cfav {
  color: pink;
}
span {
  font-size: 16px;
  color: rgb(194, 175, 70);
}
</style>