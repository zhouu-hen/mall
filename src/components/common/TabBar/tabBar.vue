<!-- tab导航栏模块 -->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TarBar",
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style scoped>
#tab-bar {
  display: flex;
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 2px rgba(193, 195, 206, 0.2);
}

</style>