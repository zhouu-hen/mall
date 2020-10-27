<!-- 顶部结算按钮 -->
<template>
  <div class="button">
    <div class="svgP">
      <svg class="icon" aria-hidden="true" slot="icon-action">
        <use xlink:href="#icon-shoucang" />
      </svg>
      <span>客服</span>
    </div>
    <div class="svgP">
      <svg class="icon" aria-hidden="true" slot="icon-action">
        <use xlink:href="#icon-dianpu" />
      </svg>
      <span>店铺</span>
    </div>
    <div class="kefu svgP">
      <svg class="icon" aria-hidden="true" slot="icon-action">
        <use xlink:href="#icon-kefu" />
      </svg>
      <span>客服</span>
    </div>
    <div>
      <div class="car" @click="buycar">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "deatilbuttonbar",
  data() {
    return {};
  },
  methods: {
    buycar() {
      this.$emit("buycar")
    },
  },
};
</script>
<style scoped>
.button {
  height: 45px;
  background-color: #ffffff;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding-left: 3px;
  box-shadow: 0 -2px 2px rgb(228, 225, 225);
  color: black;
}
.button .svgP {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 12px;
  flex: 1;
}
.button div {
  display: flex;
  justify-content: center;
}
.button .icon {
  font-size: 16px;
}
.kefu .icon {
  font-size: 16px;
}
.button .car {
  width: 90px;
  padding: 0 5px;
  line-height: 45px;
  font-size: 14px;
  background-color: rgb(233, 208, 65);
}
.button .buy {
  color: white;
  line-height: 45px;
  width: 75px;
  padding: 0 5px;
  font-size: 14px;
  background-color: rgb(244, 115, 147);
}
</style>