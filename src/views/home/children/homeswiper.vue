<!-- 导航栏的模板 -->
<template>
  <div>
    <swiper>
      <swiperItem v-for="item in banners" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title" @load="imgLoad" />
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
    return {
      emitImg: true,
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
      required: true,
    },
  },
  methods: {
    imgLoad() {
      if (this.emitImg) {
        this.$emit("swiperImgLoad");
        this.emitImg = false;
      }
    },
  },
  components: {
    swiper,
    swiperItem,
  },
};
</script>
<style scoped>
</style>