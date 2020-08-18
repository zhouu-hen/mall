<!-- 详情页轮播图 -->
<template>
  <swiper-vue class="detailSwiper">
    <swiper-item-vue v-for="(item, index) in swiperimg" :key="index">
      <img :src="item">
    </swiper-item-vue>
  </swiper-vue>
</template>

<script>
import swiperVue from "../../../components/common/swiper/swiper.vue";
import swiperItemVue from "../../../components/common/swiper/swiperItem.vue";

export default {
  name: "detailswiper",
  data() {
    return {};
  },
  props: {
    swiperimg: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {},
  components: {
    swiperVue,
    swiperItemVue,
  },
};
</script>
<style scoped>
.detailSwiper{
  height: 300px;
  overflow: hidden;
}

</style>