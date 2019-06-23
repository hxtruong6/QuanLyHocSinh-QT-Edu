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
      <div class="infoSelect session">
        <div>Học kỳ</div>
        <el-select v-model="semester" placeholder="Học kỳ">
          <el-option
            v-for="item in semesters"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>
    <div class="grade__result result" ref="gradeResult">
      <div class="result__title">Kết quả học tập</div>
      <el-table class="result__data" stripe :height="tableHeight" :data="tableData">
        <el-table-column prop="yearSemester" label="NK/HK" width="180"></el-table-column>
        <el-table-column prop="subject" label="Môn học" width="180"></el-table-column>
        <el-table-column prop="credit" label="Số tín chỉ" width="180"></el-table-column>
        <el-table-column prop="grade" label="Điểm" width="180"></el-table-column>
        <el-table-column prop="note" label="Ghi chú"></el-table-column>
      </el-table>
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
    },
    tableData: function() {
      const subject = {
        year: "2016-2017",
        semester: 2,
        subject: "Môn Âm nhạc",
        credit: 4,
        grade: "10.0",
        note: "Đây là ghi chú"
      };
      let subs = [];
      for (let i = 0; i < 20; i++) {
        subs.push(subject);
      }

      const data = subs.map(s => {
        return {
          yearSemester: `${s.year}/${s.semester}`,
          ...s
        };
      });

      return data;
    },
    tableHeight: function() {
      if (!this.$refs.gradeResult || !this.$refs.gradeResult.clientHeight)
        return 700;
      return this.$refs.gradeResult.clientHeight - 20;
    }
  },
  mounted: function() {
    this.selectedSchoolYear = this.schoolYears[
      this.schoolYears.length - 1
    ].value;
    this.semester = this.semesters[0].value;
    // this.tableHeight =
    //   !this.$refs.gradeResult || !this.$refs.gradeResult.clientHeight
    //     ? 500
    //     : this.$refs.gradeResult.clientHeight - 20;
  },
  data() {
    return {
      selectedSchoolYear: "",
      semester: ""
    };
  },
  methods: {
    // getHeight() {
    //   console.log("xxx 600 ref: ", this.$refs.gradeResult);
    //   return
    // }
  }
};
</script>
<style lang="scss" scoped>
.grade {
  width: 100%;
  height: 100%;

  &__info {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    margin-bottom: 10px;
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

  &__result,
  .result {
    height: 90%;
    width: 100%;

    &__title {
      font-weight: bold;
      margin-bottom: 5px;
    }
    &__data {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
