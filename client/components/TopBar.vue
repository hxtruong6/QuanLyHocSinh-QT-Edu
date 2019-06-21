<template>
  <div class="topBar">
    <el-row>
      <el-col>
        <div class="grid-content bg-purple-dark">
          <el-button class="side-bar-btn" icon="el-icon-s-unfold"></el-button>

          <!-- <img class="topBar__logo" src="~assets/images/butterfly-icon.png">
          <h1 class="topBar__header">{{header}}</h1>-->
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      header: "Butterfly detector"
    };
  }
};
</script>

<style lang='scss' scoped>
.topBar {
  // background-color: $primary-color-light;
  // width: 100%;
  // display: flex;
  // padding: 4px;
  // top: 0;

  // &__logo {
  //   position: relative;
  //   left: 20px;
  //   padding: 3px;
  //   max-width: 50px;
  //   max-height: 50px;
  //   animation: moveInLeft 1s ease-in-out;
  // }

  // &__header {
  //   margin: auto;
  //   text-transform: uppercase;
  //   color: $white-color;
  //   font-size: 2rem;
  // }
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.grid-content {
  border-radius: 4px;
  min-height: 40px;
}
.side-bar-btn {
  font-size: 3rem;
}
</style>
