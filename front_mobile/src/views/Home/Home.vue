<template>
  <div class="home-container">
    <van-nav-bar title="我的Mobile首页" @click-left="onClickLeft" fixed />
    <ArticleInfo
      v-for="item in list"
      :key="item.art_id"
      :title="item.title"
      :comm_count="item.comm_count"
      :pubdate="item.pubdate"
      :aut_name="item.aut_name"
      :is_top="item.is_top"
      :cover="item.cover"
    >
    </ArticleInfo>
  </div>
</template>

<script>
import { articleApi } from "@/utils/homeApi.js";
import ArticleInfo from "@/components/ArticleInfo.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    ArticleInfo,
  },
  data() {
    return {
      list: [],
      page: 1,
      pageSize: 10,
    };
  },
  methods: {
    async getList() {
      const {
        data: { data: res },
      } = await articleApi(this.page, this.pageSize);
      this.list = res;
    },
  },
  created() {
    this.getList();
  },
};
</script>

<style lang="less" scoped>
.home-container {
  padding-top: 46px;
  padding-bottom: 50px;

  .van-nav-bar {
    background-color: #007bf0;
  }
  /deep/ .van-nav-bar__title {
    color: #fff;
  }
}
</style>
