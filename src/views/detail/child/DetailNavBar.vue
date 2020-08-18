<!-- 详情页的导航栏 -->
<template>
  <div>
    <navBar>
      <div slot="left" @click="back">
        <img src="~assets/img/common/back.svg" alt="back" class="back" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in titles"
          :key="index"
          class="item"
          :class="{action:index == currentIndex}"
          @click="itemClick(index)"
        >{{item}}</div>
      </div>
    </navBar>
  </div>
</template>

<script>
import navBar from "components/common/navbar/navBar.vue";
export default {
  name: "detailnavbar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("itemClick", index);
    },
    back() {
      this.$router.back();
    },
  },
  components: {
    navBar,
  },
};
</script>
<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.item {
  flex: 1;
}
.action {
  color: var(--color-high-text);
}
.back {
  margin-top: 11px;
  width: 20px;
}
</style>