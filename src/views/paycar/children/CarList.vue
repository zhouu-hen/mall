<!-- 购物车数据布局 -->
<template>
  <div class="car-list">
    <scroll class="content" ref="scroll">
      <CarListItem v-for="(item,index) in carList" :key="index" :product="item" />
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import scroll from "../../../components/common/scroll/scroll.vue";
import CarListItem from "./CarListItem.vue";

export default {
  name: "catlist",
  data() {
    return {};
  },
  components: {
    scroll,
    CarListItem,
  },
  computed: {
    ...mapGetters(["carList"]),
  },
  activated(){
    this.$refs.scroll.scroll.refresh()
  }
};
</script>
<style scoped>
.car-list {
  height: calc(100vh - 44px - 49px - 40px);
  overflow: hidden;
}
.content {
  height: 100%;
}
</style>