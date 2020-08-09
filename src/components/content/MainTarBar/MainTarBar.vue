<template>
  <TarBar class="TarBar">
    <TarBarItem path="/home" ActionColor="rgb(100,237,172)">
      <svg class="icon" aria-hidden="true" slot="icon-action">
        <use xlink:href="#icon-shouye" />
      </svg>
      <svg class="icon" aria-hidden="true" slot="icon">
        <use xlink:href="#icon-1" />
      </svg>
      <div slot="text">首页</div>
    </TarBarItem>

    <TarBarItem path="/classify">
      <svg class="icon" aria-hidden="true" slot="icon-action">
        <use xlink:href="#icon-fenlei" />
      </svg>
      <svg class="icon" aria-hidden="true" slot="icon">
        <use xlink:href="#icon-fenlei1" />
      </svg>
      <div slot="text">分类</div>
    </TarBarItem>

    <TarBarItem path="/paycar">
      <svg class="icon" aria-hidden="true" slot="icon-action">
        <use xlink:href="#icon-gouwuche" />
      </svg>
      <svg class="icon" aria-hidden="true" slot="icon">
        <use xlink:href="#icon-gouwuche1" />
      </svg>
      <div slot="text">购物车</div>
    </TarBarItem>

    <TarBarItem path="/profile">
      <svg class="icon" aria-hidden="true" slot="icon-action">
        <use xlink:href="#icon-wode" />
      </svg>
      <svg class="icon" aria-hidden="true" slot="icon">
        <use xlink:href="#icon-wode1" />
      </svg>
      <div slot="text">我的</div>
    </TarBarItem>
  </TarBar>
</template>

<script>
import TarBar from "components/common/TabBar/tabBar";
import TarBarItem from "components/common/TabBar/tabbar-items";

export default {
  name: "MainTarBar",
  components: {
    TarBar,
    TarBarItem,
  },
};
</script>

<style scoped>
.TarBar{
  background-color: white;
}
</style>
