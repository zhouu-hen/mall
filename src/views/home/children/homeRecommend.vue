<!-- 主页推荐 -->
<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.sort">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeRecommend",
  data() {
    return {};
  },
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      },
      required: true,
    },
  },
  methods: {},
};
</script>
<style scoped>
.recommend{
  display: flex;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  padding: 10px 0 15px;
  border-bottom: 7px #ccc solid;
}
.recommend img{
  flex: 1;
  width: 83%;
  margin-bottom: 7px;
}
</style>