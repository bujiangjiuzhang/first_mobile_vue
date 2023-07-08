<template>
  <div class="home-container">
    <van-nav-bar title="我的Mobile首页" @click-left="onClickLeft" fixed />
    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :disabled="finished">
      <!-- 上拉加载更多 -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
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
      </van-list>
    </van-pull-refresh>
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
      loading: true, // 默认第一页数据不调用load，请求完后设置为false
      finished: false,
      isLoading: true,
      page: 1,
      pageSize: 8,
      // total: 0
    };
  },
  methods: {
    async getList(isFresh) {
      const {
        data: { data: res },
      } = await articleApi(this.page, this.pageSize);
      // 判断是上拉加载还是下拉刷新isFresh
      // isFresh:下拉刷新
      if (isFresh) {
        this.list = [...res, ...this.list]
        this.isLoading = false
      } else {
        this.list = [...this.list, ...res]
        this.loading = false;
      }
      if (res.length === 0) {
        this.finished = true;
      }
    },
    onLoad() {
      // console.log('this.page * this.pageSize', this.page * this.pageSize, this.total)
      // if (this.page * this.pageSize <= this.total) {
      //   this.page = this.page + 1
      //   this.getList()
      //   this.loading = true
      // } else {
      //   this.finished = true
      // }
      console.log('*********')
      this.page++;
      this.getList();
    },
    onRefresh() {
      this.page++
      this.getList(true)
    }
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
