<template>
  <el-aside class="sideBar" width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu
      class="sideBar__menu"
      :collapse="isSideBarOpen"
      :unique-opened="false"
      :collapse-transition="false"
      mode="vertical"
    >
      <!-- <sidebar-item
        v-for="route in permission_routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />-->
    </el-menu>
  </el-aside>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SideBar",
  computed: {
    ...mapState({
      isSideBarOpen: state => state.app.isSideBarOpen
    })
  },
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.sideBar {
  &__menu {
    background-color: $primary-color;
  }
}
</style>
