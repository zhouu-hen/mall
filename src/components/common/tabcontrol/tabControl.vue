<!-- 可以切换的控制栏 -->
<template>
  <div class="control">
    <div v-for="(item,index) in titles" :key="index" class="titles" @click="itemClick(index)">
      <span :class="{Action:index==current}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
      required: true,
    },
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.current = index;
      this.$emit("tab-goods", index);
      
    },
  },
};
</script>
<style scoped>
.control {
  display: flex;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
}
.titles {
  flex: 1;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
}
.titles span {
  padding: 5px;
  border-radius: 3px;
}
.Action {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
</style>