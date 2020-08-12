<!-- 主页组件 -->
<template>
  <div id="home">
    <navBarVue class="homeBar">
      <div slot="center">购物街</div>
    </navBarVue>

    <scrollVue
      class="content"
      ref="scroll"
      @PositionScroll="showTop"
      :probeType="3"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <homeswiperVue :banners="banners" class="banner" />
      <homeRecommendVue :recommend="recommends" />
      <featureVue />
      <tabControlVue :titles="titles" class="tabControl" @tab-goods="goodsshow" />
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
import backTop from "../../components/content/backtop/backTop.vue";

import homeswiperVue from "./children/homeswiper.vue";
import homeRecommendVue from "./children/homeRecommend.vue";
import featureVue from "./children/feature.vue";

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
      isTopShow: false,
    };
  },
  components: {
    navBarVue,
    homeswiperVue,
    homeRecommendVue,
    featureVue,
    tabControlVue,
    goodsListVue,
    scrollVue,
    backTop,
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
      });
    },
    // 切换显示商品
    goodsshow(index) {
      this.currentType = this.goodsLable[index];
    },
    backtop() {
      // 获取scrollvue中的scroll变量
      this.$refs.scroll.scroll.scrollTo(0, 0, 1000);
    },
    showTop(position) {
      this.isTopShow = position.y < -1000;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.finishPullUp();
    },
    debounce(fun, delay) {
      let timer = null;
      return function (...args) {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          fun.apply(this, args);
        }, delay);
      };
    },
  },
  created() {
    // 标签页,和商品
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 读取事件总线
    const refresh = this.debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("imgHeight", () => {
      // 对Bscroll进行刷新
      refresh()
    });
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  padding-top: 44px;
}
.homeBar {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 99;
}
.tabControl {
  position: sticky;
  top: 44px;
}

.content {
  height: calc(100% - 48px);
  overflow: hidden;
}
</style>