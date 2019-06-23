<template>
  <div class="timeTable">
    <el-row class="timeTable__dayOfWeek">
      <el-col :span="2">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light">Monday</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">Tuesday</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light">Wednesday</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">Thursday</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light">Friday</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">Saturday</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light">Sunday</div>
      </el-col>
    </el-row>
    <el-row class="timeTable__lesson lesson">
      <el-col :span="2">
        <div class="grid-content bg-purple lesson__timeLine">
          <div v-for="h in timeLine" v-bind:key="h">
            <p>{{h}}H</p>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timeLine: Array.from({ length: 13 }, (v, k) => k + 6),
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.timeTable {
  width: 100%;
  height: 100%;
  margin: auto;
  .el-row {
    // margin-bottom: 1px;
    border: 0.5px solid $white;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    // border-radius: 4px;
    text-align: center;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    // border-radius: 4px;
    min-height: 36px;
  }

  &__dayOfWeek {
    width: 100%;
  }
  &__lesson,
  .lesson {
    width: 100%;
    height: 70%;
    min-height: 50%;
    max-height: 80%;
    .el-col {
      height: 100%;

      & > div {
        height: 100%;
      }
    }

    &__timeLine {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: space-around;
    }
  }
}
</style>
