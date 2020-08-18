<!-- 商品图片的详细信息 -->
<template>
  <div v-if="Object.keys(detailInfo).length !== 0">
    <div>{{detailInfo.desc}}</div>
    <div>{{detailInfo.detailImage[0].key}}</div>
    <div class="infoList">
      <img
        v-for="(item , index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "detailgoodinfo",
  data() {
    return {};
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {
          counter: 0,
          imgLength: 0,
        };
      },
    },
  },
  methods: {
    imgLoad() {
      this.$emit("imgLoad")
      //节流防抖
      // if(++this.counter == this.imgLength){
      //   this.$emit("imgLoad");
      // }
    },
  },
  watch:{
    detailInfo(){
      // 获取到图片的个数
      this.imgLength = this.detailInfo.detailImage[0].list.length
    }
  }
};
</script>
<style scoped>
.infoList img {
  width: 100%;
}
</style>