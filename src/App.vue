<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <MainTarBarVue></MainTarBarVue>
  </div>
</template>

<script>
import MainTarBarVue from "components/content/MainTarBar/MainTarBar.vue";

export default {
  name: "App",
  components: {
    MainTarBarVue,
  },
};
</script>

<style>
@import url("assets/css/base.css");
</style>
