<!-- 回到顶部的实现 -->
<template>
  <div class="top">
    <img src="~assets/img/common/top.png" alt />
  </div>
</template>

<script>
export default {
  name: "backTop",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.top{
  position: fixed;
  right: 10px;
  bottom: 50px;
}
.top img{
  width: 36px;
}
</style>