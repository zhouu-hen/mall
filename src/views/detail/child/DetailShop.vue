<!-- 店铺详情页 -->
<template>
  <div class="big">
    <div class="logo">
      <img :src="shop.logo" alt="logo" />
      <span>{{shop.name}}</span>
    </div>
    <div class="content">
      <div class="left">
        <div>
          <p>{{shop.sells | showFans}}</p>
          <p>总销量</p>
        </div>
        <div>
          <p>{{shop.goodCount }}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="right">
        <div v-for="(item,index) in shop.score" :key="index" class="scores">
          <span>{{item.name}}</span>
          <span class="score" :class="{nice:item.isBetter}">{{item.score}}</span>
          <span v-if="item.isBetter">👍</span>
        </div>
      </div>
    </div>
    <div class="Go">
      <span>进店逛逛</span>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "detailShop",
  data() {
    return {};
  },
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {},
  filters: {
    showFans(fans) {
      if (fans > 10000) {
        fans = fans / 10000;
        return fans.toFixed(2) + "万";
      } else {
        return fans;
      }
    },
  },
};
</script>
<style scoped>
.big {
  padding-bottom: 20px;
  border-bottom: #ccc 3px solid;
}
.logo {
  height: 40px;
  line-height: 40px;
  padding: 10px 20px;
  display: flex;
  color: black;
  margin-top: 10px;
  font-size: 15px;
}
.logo img {
  height: 40px;
  margin-right: 10px;
}
.content {
  padding: 20px 20px;
  font-size: 14px;
  height: 90px;
  display: flex;
  align-items: center;
  color: black;
}
.left {
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 135px;
  border-right: 1px solid #ccc;
  padding-right: 10px;
  align-content: center;
}
.right {
  font-size: 14px;
  margin-left: 30px;
}
.scores {
  display: flex;
}
.right .score {
  margin-left: 5px;
}
.nice {
  width: 29px;
  color: rgb(243, 69, 69);
}
.Go {
  text-align: center;
}
.Go span {
  background-color: rgb(240, 239, 239);
  font-size: 12px;
  padding: 4px 25px;
  border-radius: 10px;
}
</style>