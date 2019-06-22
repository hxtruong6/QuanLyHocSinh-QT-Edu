<template>
  <el-aside class="sideBar" width="this.$ref.menu.clientWidth">
    <el-menu default-active="1" class="sideBar__menu" :collapse="isCollapse" ref="menu">
      <el-menu-item index="1">
        <i class="el-icon-date"></i>
        <span slot="title">Schedule</span>
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
  methods: {}
};
</script>

<style lang='scss' scoped>
.sideBar {
  max-width: 22%;

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
