<!-- 商品的介绍与描述 -->
<template>
  <div v-if="Object.keys(goods).length !== 0">
    <div class="title"> {{goods.title}}</div>
    <div class="price">
      <span class="newPrice">{{goods.price}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="columns">
      <div v-for="(item,index) in goods.columns" :key="index">
        <span>{{item}}</span>
      </div>
    </div>
    <div class="services">
      <div v-for="(item, index) in goods.services" :key="index" class="service">
        <img :src="item.icon" alt />
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailbaseinfo",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {},
};
</script>
<style scoped>
.title {
  font-size: 15px;
  font-weight: 600px;
  padding: 5px;
  color: black;
}
.price {
  padding: 5px;
  position: relative;
}
.price .newPrice {
  line-height: 35px;
  color: #ff8198;
  font-size: 20px;
  font-weight: 700;
  padding-right: 5px;
}
.price .oldPrice{
  font-size: 12px;
  text-decoration: line-through;
  color: #999;
}
.price .discount{
  margin-left: 5px;
  background: #ff8198;
  color: white;
  position: absolute;
  border-radius: 5px;
  padding: 2px;
  font-size: 12px;
  top: 9px;
}
.columns{
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  padding: 0 8px;
  padding-bottom: 10px;
  color: rgb(131, 128, 128);
  border-bottom: #ccc 1px solid;
}

.services {
  font-size: 13px;
  display: flex;
  flex-flow: row wrap;
  /* justify-content: space-between; */
  padding-bottom: 5px;
  border-bottom: #ccc 1px solid;

}
.service {
  text-align: center;
  padding-top: 5px;
  width: 100px;
}
.service img {
  width: 10px;
}
</style>