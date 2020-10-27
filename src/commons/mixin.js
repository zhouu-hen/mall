import {
  debounce
} from "commons/tools.js";
import backTop from "components/content/backtop/backTop.vue";


// 混入的使用导出一个变量,在使用mixins:[]来接收


export const imgListenerMixin = {
  deta() {
    return {
      imgListener: null,
    }
  },
  mounted() {
    // 读取事件总线
    let refresh = debounce(this.$refs.scroll.refresh, 200);
    this.imgListener = () => {
      // 对Bscroll进行刷新
      refresh();
    };
    this.$bus.$on("imgHeight", this.imgListener);
  }
}

export const backTopMix = {
  data() {
    return {
      isTopShow: false,
    }
  },
  methods: {
    backtop() {
      // 获取scrollvue中的scroll变量
      this.$refs.scroll.scroll.scrollTo(0, 0, 1000);
    },
  },
  components: {
    backTop,
  }
}
