<template>
  <div class="showPage">
    <div
      class="showPage_items"
      style="margin-left: 0px"
      :router="true"
      :default-active="currPath"
    >
      <el-row :gutter="60" style="margin-left: 0px; margin-right: 0px">
        <el-col :span="6">
          <el-card :body-style="{ padding: '5px' }" index="dashboard" @click="onMenuItemClick">
            <img src="~/assets/images/home-dashboard.png" />
            <div style="padding: 10px; text-align: center; font-size: 16px; font-weight: bolder">
              <span>Dashboard</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '5px' }" index="profile" @click="onMenuItemClick">
            <img src="~/assets/images/profile.png" />
            <div style="padding: 10px; text-align: center; font-size: 16px; font-weight: bolder">
              <span>Hồ sơ học sinh</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '5px' }" index="schedule" @click="onMenuItemClick">
            <img src="~/assets/images/schedule1.png" />
            <div style="padding: 10px; text-align: center; font-size: 16px; font-weight: bolder">
              <span>Thời khóa biểu</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '5px' }" index="score" @click="onMenuItemClick"> 
            <img src="~/assets/images/grade3.png" />
            <div style="padding: 10px; text-align: center; font-size: 16px; font-weight: bolder">
              <span>Điểm số</span>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="60" style="margin-left: 0px; margin-right: 0px">
        <el-col :span="6">
          <el-card :body-style="{ padding: '5px' }" index="progress" @click="onMenuItemClick">
            <img src="~/assets/images/progress1.png" />
            <div style="padding: 10px; text-align: center; font-size: 16px; font-weight: bolder">
              <span>Quá trình</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '5px' }" index="notification" @click="onMenuItemClick">
            <img src="~/assets/images/notification1.png" />
            <div style="padding: 10px; text-align: center; font-size: 16px; font-weight: bolder">
              <span>Thông báo</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ShowPage",
  computed: {
    ...mapState({
      //isCollapse: state => state.app.isSideBarOpen,
      currPath: state => state.app.currPath
    })
  },
  methods: {
    onMenuItemClick(card) {
      this.$store.commit("app/onSideBarClick", card.index);
      console.log("abc");
    }
  }
};
</script>


<style lang="scss" scoped>
.el-row {
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.el-col:hover {
  cursor: pointer;
  box-shadow: 1px 1px #99a9bf;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e6e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

