<template>
  <el-header class="topBar">
    <div class="side-bar-field">
      <i v-if="isSideBarOpen" @click="onSideBarClick" class="el-icon-s-unfold side-bar-btn"></i>
      <i v-if="!isSideBarOpen" @click="onSideBarClick" class="el-icon-s-fold side-bar-btn"></i>
    </div>
    <img class="topBar__logo" :src="getImgUrl('student.png')">
    <h1 class="topBar__header">{{header}}</h1>
    <!-- </div> -->
  </el-header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TopBar",
  computed: {
    ...mapState({
      isSideBarOpen: state => state.app.isSideBarOpen
    })
  },
  data() {
    return {
      header: "QT - EDU",
      a2: 2,
      a1: "5fsa",
      objs: {}
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("~/assets/images/" + pic);
    },
    onSideBarClick() {
      this.$store.commit("app/toggleCollapse");
    }
  }
};
</script>

<style lang='scss' scoped>
.topBar {
  background-color: $primary-color;
  border-radius: 4px;
  min-height: 40px;
  max-height: 50px;
  position: relative;
  display: flex;

  .side-bar-field {
    margin: auto 0;
  }
  .side-bar-btn {
    font-size: 3rem;
    margin-left: 10px;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 4px darkgray;
    }

    &:active {
      animation: popFade 0.5s ease-in;
    }
  }

  &__logo {
    position: relative;
    left: 20px;
    padding: 3px;
    width: 40px;
    height: 40px;
    max-width: 40px;
    max-height: 40px;
    animation: moveInLeft 1s ease-in-out;
    margin: auto 0;
  }

  &__header {
    margin: auto;
    text-transform: uppercase;
    color: $white;
    font-size: 2rem;
  }
}
</style>
