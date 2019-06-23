<template>
  <el-aside class="sideBar" width="this.$ref.menu.clientWidth">
    <el-menu
      router="true"
      default-active="grade"
      class="sideBar__menu"
      :collapse="isCollapse"
      ref="menu"
    >
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
      isCollapse: state => state.app.isSideBarOpen
    })
  },
  methods: {
    onMenuItemClick(item) {
      console.log("xxx 300 onMenuItemClick: ", item);
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
