<!-- tabbar得图片文字模块 -->
<template>
  <div class="tab-bar-item" @click="tabClick">
    <div v-if="isAction">
      <slot name="icon-action"></slot>
    </div>
    <div v-else>
      <slot name="icon"></slot>
    </div>
    <div :style="Actionstyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TarBarItem",
  data() {
    return {};
  },
  props: {
    path: {
      type: String,
      required: true,
    },
    ActionColor: {
      type: String,
      default: "rgb(209, 174, 76)",
    },
  },
  computed: {
    isAction() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    Actionstyle() {
      return this.isAction ? { color: this.ActionColor } : {};
    },
  },
  methods: {
    tabClick() {
      this.$router.replace(this.path).catch((err) => {
        err;
      });
    },
  },
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
}
.tab-bar-item .icon {
  font-size: 20px;
}
.tab-bar-item div {
  font-family: 楷体;
  font-size: 13px;
}
</style>
