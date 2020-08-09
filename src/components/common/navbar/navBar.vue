<!-- 导航栏 -->
<template>
  <div class="nav">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.nav {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 2px 2px rgba(193, 195, 206, 0.2);
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>