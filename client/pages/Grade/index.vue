<template>
  <div class="grade">
    <div class="grade__info">
      <div class="infoSelect year">
        <div>Năm học</div>
        <el-select v-model="selectedSchoolYear" placeholder="Năm học">
          <el-option
            v-for="item in schoolYears"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <!-- <div class="infoSelect session">
        <div>Học kỳ</div>
        <el-select v-model="semester" placeholder="Học kỳ">
          <el-option
            v-for="item in semesters"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>-->
    </div>
  </div>
</template>
<script>
export default {
  name: "Grade",
  computed: {
    schoolYears: function() {
      return [
        {
          value: "all",
          label: "Tất cả"
        },
        {
          value: "2016",
          label: "2016-2017"
        },
        {
          value: "2017",
          label: "2017-2018"
        },
        {
          value: "2018",
          label: "2018-2019"
        },
        {
          value: "2019",
          label: "2019-2020"
        }
      ];
    },
    semesters: function() {
      return [
        { value: 1, label: "Học kỳ 1" },
        { value: 2, label: "Học kỳ 2" },
        { value: 3, label: "Học kỳ Hè" }
      ];
    }
  },
  data() {
    return {
      selectedSchoolYear: ""
      // selectedSchoolYear: this.schoolYears[this.schoolYears.length - 1].value,
      // semester: this.semesters[this.semesters.length - 1].value
    };
  },
  mounted: function() {
    console.log("xxx500: ", this.schoolYears);
  }
};
</script>
<style lang="scss" scoped>
.grade {
  &__info {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }

  .infoSelect {
    margin: auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    & > div {
      margin: auto 5px;
    }
  }
}
</style>
