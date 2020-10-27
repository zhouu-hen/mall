<!-- 购物车 -->
<template>
  <div>
    <navBar class="nav">
      <div slot="center">购物车({{carLength}})</div>
    </navBar>
    <CarList />
    <CarBar />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import navBar from "../../components/common/navbar/navBar.vue";
import CarList from "./children/CarList.vue";
import CarBar from "./children/CarBar.vue";

export default {
  name: "paycar",
  data() {
    return {};
  },
  components: {
    navBar,
    CarList,
    CarBar,
  },
  methods: {},
  computed: {
    ...mapGetters(["carLength"]),
  },
};
</script>
<style scoped>
.nav {
  background-color: #ff8198;
  color: #fff;
}
</style>