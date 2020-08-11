<!-- 屏幕滚动 -->
<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll:null,
      message:'hhh'
    };
  },
  methods: {
    
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true
    })
  }
};
</script>
<style scoped>
</style>