<!-- 主页组件 -->
<template>
  <div id="home">
    <navBarVue class="homeBar">
      <div slot="center">购物街</div>
    </navBarVue>
    <tabControlVue
      :titles="titles"
      class="tabControl"
      @tab-goods="goodsshow"
      ref="tabControl2"
      v-show="tabControlShow"
    />

    <scrollVue
      class="content"
      ref="scroll"
      @PositionScroll="PositionScroll"
      :probeType="3"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <homeswiperVue :banners="banners" class="banner" @swiperImgLoad="swiperImgLoad" />
      <homeRecommendVue :recommend="recommends" />
      <featureVue />
      <tabControlVue
        :titles="titles"
        @tab-goods="goodsshow"
        ref="tabControl1"
        v-show="!tabControlShow"
      />
      <goodsListVue :goods="goods[currentType].list"></goodsListVue>
    </scrollVue>

    <backTop @click.native="backtop" v-show="isTopShow"></backTop>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from "network/home.js";

import navBarVue from "components/common/navbar/navBar.vue";
import tabControlVue from "components/common/tabcontrol/tabControl.vue";
import goodsListVue from "components/content/goods/goodsList.vue";
import scrollVue from "components/common/scroll/scroll.vue";

import homeswiperVue from "./children/homeswiper.vue";
import homeRecommendVue from "./children/homeRecommend.vue";
import featureVue from "./children/feature.vue";

import { imgListenerMixin, backTopMix } from "commons/mixin.js";

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "精选", "新款"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      goodsLable: ["pop", "new", "sell"],
      currentType: "pop",
      swiperTop: 0,
      tabControlShow: false,
      saveY: 0,
    };
  },
  mixins: [imgListenerMixin, backTopMix],
  components: {
    navBarVue,
    homeswiperVue,
    homeRecommendVue,
    featureVue,
    tabControlVue,
    goodsListVue,
    scrollVue,
  },
  methods: {
    // 获取轮播图数据和推荐的
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    // 获取商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.scroll.finishPullUp();
      });
    },
    // 切换显示商品
    goodsshow(index) {
      this.currentType = this.goodsLable[index];
      this.$refs.tabControl1.current = index;
      this.$refs.tabControl2.current = index;
    },
    // 事件内相关的方法
    
    PositionScroll(position) {
      this.isTopShow = position.y < -1000;
      this.tabControlShow = -position.y > this.swiperTop - 44;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    // 轮播图图片加载完成
    swiperImgLoad() {
      this.swiperTop = this.$refs.tabControl1.$el.offsetTop;
    },
  },
  created() {
    // 标签页,和商品
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {},
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scroll.scrollTo(0, this.saveY);
  },
  deactivated() {
    // 保存滚动的位置
    this.saveY = this.$refs.scroll.scroll.y;

    // 取消对Bscroll的刷新
    this.$bus.$off("imgHeight", this.imgListener);
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
}
.homeBar {
  background-color: var(--color-tint);
  color: white;
}
.tabControl {
  position: relative;
  top: 0;
}

.content {
  height: calc(100% - 48px);
  overflow: hidden;
}
</style>