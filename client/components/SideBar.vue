<template>
  <el-aside class="sideBar" width="this.$ref.menu.clientWidth">
    <el-menu
      class="sideBar__menu"
      :router="true"
      :default-active="currPath"
      :collapse="isCollapse"
      ref="menu"
    >
      <el-menu-item index="dashboard" @click="onMenuItemClick">
        <i class="el-icon-s-home"></i>
        <span slot="title">Trang chủ</span>
      </el-menu-item>
      <el-menu-item index="schedule" @click="onMenuItemClick">
        <i class="el-icon-date"></i>
        <span slot="title">Thời khóa biểu</span>
      </el-menu-item>
      <el-menu-item index="grade" @click="onMenuItemClick">
        <i class="el-icon-notebook-1"></i>
        <span slot="title">Điểm số</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SideBar",
  computed: {
    ...mapState({
      isCollapse: state => state.app.isSideBarOpen,
      currPath: state => state.app.currPath
    })
  },
  methods: {
    onMenuItemClick(item) {
      this.$store.commit("app/onSideBarClick", item.index);
    }
  }
};
</script>

<style lang='scss' scoped>
.sideBar {
  max-width: 22%;
  font-size: 1.6rem;

  & span {
    font-size: 1.6rem;
  }

  &__menu {
    background-color: $primary-color-light;
    height: 100%;
    &:not(.el-menu--collapse) {
      width: 200px;
      min-height: 100%;
    }
  }
}
</style>
