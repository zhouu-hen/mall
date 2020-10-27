<!-- 详情页 -->
<template>
  <div id="detail">
    <DetailNavBar @itemClick="navItemClick" ref="nav" />
    <Scroll class="content" ref="scroll" @PositionScroll="PositionScroll" :probeType="3">
      <DetailSwiper :swiperimg="topImages" />
      <DetailBaseInfo :goods="goods" />
      <DetailShop :shop="shop" />
      <DetailGoodsInfo :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <DetailParam :paramInfo="paramInfo" ref="params" class="detail-set-scroll" />
      <DeatilComment :comment="comment" ref="comments" />
      <p class="tuijian">推荐展示</p>
      <goodsList :goods="recommend" ref="recommends" />
    </Scroll>
    <DeatilButtonBar @buycar="addCar" />
    <backTop @click.native="backtop" v-show="isTopShow"></backTop>
    <Toast />
  </div>
</template>

<script>
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";
import { imgListenerMixin, backTopMix } from "../../commons/mixin.js";
import { debounce } from "../../commons/tools.js";

import DetailNavBar from "./child/DetailNavBar.vue";
import DetailSwiper from "./child/DetailSwiper.vue";
import DetailBaseInfo from "./child/DetailBaseInfo.vue";
import DetailShop from "./child/DetailShop.vue";
import DetailGoodsInfo from "./child/DetailGoodsInfo.vue";
import DetailParam from "./child/DetailParam.vue";
import DeatilComment from "./child/DeatilComment.vue";
import goodsList from "../../components/content/goods/goodsList.vue";
import DeatilButtonBar from "./child/DeatilButtonBar";
import Scroll from "components/common/scroll/scroll";
import Toast from "components/common/toast/Toast.vue";

export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      comment: {},
      recommend: [],
      themeTopYs: [0],
      getThemeTopY: null,
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShop,
    DetailGoodsInfo,
    DetailParam,
    DeatilComment,
    Scroll,
    goodsList,
    DeatilButtonBar,
    Toast,
  },
  mixins: [imgListenerMixin, backTopMix],
  methods: {
    // 图片加载好后的回调函数
    imgLoad() {
      // 刷新页面
      this.$refs.scroll.scroll.refresh();

      // 调用去往各主体的位置
      this.getThemeTopY();
    },

    //导航栏点击的事件
    navItemClick(index) {
      this.$refs.scroll.scroll.scrollTo(0, -this.themeTopYs[index], 500);
    },

    PositionScroll(position) {
      const positionY = -position.y;
      for (let i = 0; i < this.themeTopYs.length - 1; i++) {
        if (
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.$refs.nav.currentIndex = i;
        }
      }
      this.isTopShow = position.y < -1000;
    },

    addCar() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      product.count = 1;

      this.$store.dispatch("addCar", product).then((res) => {
        // this.isShow = true;
        // this.message = res;
        // setTimeout(() => {
        //   this.isShow = false;
        // }, 1500);

        this.$toast.show(res)
      });

    },
  },

  mounted() {},
  created() {
    // 保存传入的iid
    this.iid = this.$route.params.iid;

    // 发送网络请求
    getDetail(this.iid).then((res) => {
      const data = res.data.result;
      // 获取顶部轮播图数据
      this.topImages = data.itemInfo.topImages;

      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //得到店铺的信息
      this.shop = new Shop(data.shopInfo);

      // 保存商品的详细数据
      this.detailInfo = data.detailInfo;

      // 获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 获取评论信息
      if (data.rate.cRate != 0) {
        this.comment = data.rate.list[0];
      }
    });

    // 请求推荐数据
    getRecommend().then((res) => {
      this.recommend = res.data.data.list;
    });

    // 给到达位置的函数封装防抖
    this.getThemeTopY = debounce(() => {
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - 33);
      this.themeTopYs.push(this.$refs.comments.$el.offsetTop - 40);
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop - 80);
      this.themeTopYs.push(Number.MAX_VALUE);
    }, 100);
  },
  destroyed() {
    this.$bus.$off("imgHeight", this.imgListener);
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 45px);
  overflow: hidden;
}
.tuijian {
  line-height: 40px;
  text-align: center;
  color: rgb(211, 201, 56);
  border-top: 2px solid rgb(228, 224, 224);
}
</style>