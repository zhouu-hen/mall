<!-- 商品评论 -->
<template>
  <div>
    <div v-if="Object.keys(comment).length !== 0">
      <div class="Top">
        <span>用户评价</span>
        <span>更多</span>
      </div>

      <div class="user">
        <img :src="comment.user.avatar" />
        <span>{{ comment.user.uname }}</span>
      </div>
      <div class="content">
        <p>{{comment.content}}</p>
      </div>
      <div class="info-detail">
        <span class="date">{{comment.created | showDate}}</span>
        <span>{{comment.style}}</span>
      </div>
      <div class="info-imgs">
        <img v-for="(item,index) in comment.images" :key="index" :src="item" />
      </div>
    </div>
    <div class="comment-info" style="color: red;" v-else>暂无用户评论</div>
  </div>
</template>

<script>
import { formatDate } from "commons/tools";
export default {
  name: "detailComment",
  data() {
    return {};
  },
  props: {
    comment: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {},
  filters: {
    showDate: function (value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    },
  },
};
</script>
<style scoped>
.Top {
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  border-bottom: 1px solid rgb(240, 237, 237);
  font-size: 14px;
  color: black;
}
.user {
  height: 40px;
  line-height: 40px;
  display: flex;
  padding: 5px 10px;
  color: black;
}
.user img {
  width: 40px;
  height: 40px;
  margin-right: 12px;
}
.content {
  margin-top: 13px;
  font-size: 13px;
  padding: 5px;
}
.info-detail {
  font-size: 12px;
  padding: 5px;
}
.info-detail .date {
  margin-right: 10px;
}
.info-imgs {
  padding-left: 5px;
  margin: 5px 0;
}
.info-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>