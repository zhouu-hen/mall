<!-- 主页组件 -->
<template>
  <div>
    <navBarVue class="homeBar">
      <div slot="center">购物街</div>
    </navBarVue>

    <homeswiperVue :banners="banners" class="banner" />

    <homeRecommendVue :recommend="recommends" />

    <featureVue />

    <tabControlVue :titles="titles" class="tabControl"/>

    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
      <li>列表31</li>
      <li>列表32</li>
      <li>列表33</li>
      <li>列表34</li>
      <li>列表35</li>
      <li>列表36</li>
      <li>列表37</li>
      <li>列表38</li>
      <li>列表39</li>
      <li>列表40</li>
      <li>列表41</li>
      <li>列表42</li>
      <li>列表43</li>
      <li>列表44</li>
      <li>列表45</li>
      <li>列表46</li>
      <li>列表47</li>
      <li>列表48</li>
      <li>列表49</li>
      <li>列表50</li>
    </ul>
    <h2>home</h2>
  </div>
</template>

<script>
import { getHomeMultidata } from "network/home.js";

import navBarVue from "components/common/navbar/navBar.vue";
import tabControlVue from "components/common/tabcontrol/tabControl.vue";

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
    };
  },
  methods: {},
  components: {
    navBarVue,
    homeswiperVue,
    homeRecommendVue,
    featureVue,
    tabControlVue,
  },
  created() {
    getHomeMultidata().then((res) => {
      console.log(res.data.data.recommend.list);
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
  },
};
</script>
<style scoped>
.homeBar {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 99;
}
.banner {
  margin-top: 44px;
}
.tabControl{
  position: sticky;
  top: 44px;
}
</style>