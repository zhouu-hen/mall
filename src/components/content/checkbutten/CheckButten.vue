<!-- 点击选中商品 -->
<template>
  <div class="check-button" :class="{Checked:isChecked}">
    <img src="~assets/img/cart/tick.svg" />
  </div>
</template>

<script>
export default {
  name: "carbutten",
  data() {
    return {};
  },
  props: {
    isChecked: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<style scoped>
.check-button {
  width: 22px;
  height: 22px;
  padding-top: 2px;
  text-align: center;
  border: 2px solid #cccccc;
  border-radius: 50%;
}

.Checked {
  background: rgb(206, 176, 45);
  border-color: rgb(206, 176, 45);
}
</style>