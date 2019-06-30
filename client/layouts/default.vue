<template>
  <div id="app">
    <top-bar />
    <el-container>
      <side-bar v-if="isLogined" />
      <el-container>
        <el-main>
          <nuxt />
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TopBar from "~/components/TopBar.vue";
import SideBar from "~/components/SideBar.vue";

import { mapState } from "vuex";

export default {
  components: {
    TopBar,
    SideBar
  },
  computed: {
    ...mapState({
      isLogined: state => state.student.isLogined
    })
  }
};
</script>
 
<style lang='scss'>
#app {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  color: $word-color;
  position: absolute;
  font-size: 1.6rem;
  //background: #f9faff;
  background: #fdfdfd;
}
</style>
