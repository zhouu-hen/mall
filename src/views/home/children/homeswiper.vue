<!-- 导航栏的模板 -->
<template>
  <div>
    <swiper>
      <swiperItem v-for="item in banners" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title" />
        </a>
      </swiperItem>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperItem } from "components/common/swiper/index.js";
export default {
  name: "homeswiper",
  data() {
    return {};
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      },
      required:true
    }
  },
  methods: {},
  components: {
    swiper,
    swiperItem,
  },
};
</script>
<style scoped>
</style>