<!-- 点击弹出的模态框 -->
<template>
  <div class="box" v-show="isShow">
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name: "toast",
  data() {
    return {
      isShow: false,
      message: "",
    };
  },
  methods: {
    show(message, timer = 1500) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
      }, timer);
    },
  },
};
</script>
<style scoped>
.box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 7px 10px;

  font-size: 14px;
  color: #fff;
  background-color: rgba(000, 000, 000, 0.7);
  z-index: 999;
}
</style>