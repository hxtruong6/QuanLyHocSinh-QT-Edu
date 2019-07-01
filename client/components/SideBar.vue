<template>
  <el-aside class="sideBar" width="this.$ref.menu.clientWidth">
    <el-menu
      class="sideBar__menu"
      :router="true"
      :default-active="currPath"
      :collapse="isCollapse"
      ref="menu"
    >
      <el-menu-item index="dashboard" @click="onMenuItemClick" id="item-menu">
        <!--<i class="el-icon-school"></i>-->
        <img src="~/assets/images/home-dashboard.png" class="item-img" />
        <span slot="title">Trang chủ</span>
      </el-menu-item>
      <el-menu-item index="profile" @click="onMenuItemClick">
        <!--<i class="el-icon-bell"></i>-->
        <img src="~/assets/images/profile.png" class="item-img" />
        <span slot="title">Hồ sơ học sinh</span>
      </el-menu-item>
      <el-menu-item index="schedule" @click="onMenuItemClick">
        <!--<i class="el-icon-date"></i>-->
        <img src="~/assets/images/schedule1.png" class="item-img" />
        <span slot="title">Thời khóa biểu</span>
      </el-menu-item>
      <el-menu-item index="score" @click="onMenuItemClick">
        <!--<i class="el-icon-notebook-1"></i>-->
        <img src="~/assets/images/grade2.png" class="item-img" />
        <span slot="title">Điểm số</span>
      </el-menu-item>
      <el-menu-item index="progress" @click="onMenuItemClick">
        <!--<i class="el-icon-data-analysis"></i>-->
        <img src="~/assets/images/progress1.png" class="item-img" />
        <span slot="title">Quá trình</span>
      </el-menu-item>
      <el-menu-item index="notification" @click="onMenuItemClick">
        <!--<i class="el-icon-bell"></i>-->
        <img src="~/assets/images/notification1.png" class="item-img" />
        <span slot="title">Thông báo</span>
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
    //color: white;
  }

  /*#item-menu:hover {
    background-color: rgb(0, 50, 70);
    color: white;
  }

  #item-menu.active {
    background-color: rgb(0, 50, 70);
    color: white;
  }*/

  .item-img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  &__menu {
    background-color: $primary-color-light;
    //background-color: $third-color-light;
    //background-color: rgb(46, 73, 133);
    //background-color: rgb(192, 205, 231);
    height: 100%;
    &:not(.el-menu--collapse) {
      width: 200px;
      min-height: 100%;
    }
  }
}
</style>
