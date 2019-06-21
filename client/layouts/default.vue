<template>
  <div id="app">
    <top-bar/>
    <el-container>
      <el-aside width="15%">Aside</el-aside>
      <el-container>
        <el-main>
          <nuxt/>
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TopBar from "~/components/TopBar.vue";
export default {
  components: {
    TopBar
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
}
</style>
