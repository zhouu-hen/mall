<!-- 结算栏 -->
<template>
  <div class="box">
    <div class="check-content" @click="checkClick">
      <CheckButten :isChecked="isSelectAll" />
      <span>全选</span>
    </div>
    <div class="price">
      合计:
      <span>{{totalPrice}}</span>
    </div>
    <div class="buying" @click="buyClick">去计算({{checkLength}})</div>
  </div>
</template>

<script>
import CheckButten from "../../../components/content/checkbutten/CheckButten.vue";
import { mapGetters } from "vuex";
export default {
  name: "carbar",
  data() {
    return {};
  },
  components: {
    CheckButten,
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.carList.forEach((element) => {
          element.checked = false;
        });
      } else {
        this.carList.forEach((element) => {
          element.checked = true;
        });
      }
    },
    buyClick(){
      if(!this.isSelectAll){
        this.$toast.show("请选择结算的商品~")
      }
    }
  },
  computed: {
    ...mapGetters(["carList"]),
    totalPrice() {
      return (
        "  ¥" +
        this.carList
          .filter((item) => {
            return item.checked;
          })
          .reduce((prev, item) => {
            return prev + parseFloat(item.price) * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.carList.filter((item) => {
        return item.checked;
      }).length;
    },
    isSelectAll() {
      if (this.carList.length === 0) return false;
      return !this.carList.find((item) => !item.checked);
    },
  },
};
</script>
<style scoped>
.box {
  display: flex;
  height: 40px;
  padding-left: 5px;
  background-color: #eee;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
}
.check-content {
  display: flex;
  height: 40px;
  align-items: center;
}
.check-content span {
  font-weight: 600;
  margin: 0 10px;
}
.price {
  font-size: 15px;
  color: black;
}
.price span {
  font-size: 17px;
  color: coral;
  font-weight: 700;
}
.buying {
  width: 90px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: coral;
  color: #fff;
}
</style>