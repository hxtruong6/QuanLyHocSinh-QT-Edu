<template>
  <div class="progress">
    <div class="progress__info">
      <div class="desired">
        <div>Danh hiệu mong muốn</div>
        <el-select v-model="selectedTitle" placeholder="Danh hiệu">
          <el-option
            v-for="item in desiredTitle"
            :key="item.id"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="desired" style="margin-left: -200px;" v-if="selectedTitle==='Khá'">
        <div style="width: 200px">Điểm trung bình</div>
        <el-input placeholder="6.5 - 7.9" :readonly="true" style="font-weight: bold"></el-input>
      </div>
      <div class="desired" style="margin-left: -200px;" v-if="selectedTitle==='Giỏi'">
        <div style="width: 200px">Điểm trung bình</div>
        <el-input placeholder="8.0 - 8.9" :readonly="true" style="font-weight: bold"></el-input>
      </div>
      <div class="desired" style="margin-left: -200px;" v-if="selectedTitle==='Xuất sắc'">
        <div style="width: 200px">Điểm trung bình</div>
        <el-input placeholder="9.0 - 10" :readonly="true" style="font-weight: bold"></el-input>
      </div>
    </div>

    <div class="progress__result result" ref="progressResult" v-if="selectedTitle==='Khá'">
      <div
        class="progress__title"
        style="margin-bottom: 0; border: groove; text-align: center; 
      border-bottom: none; font-size: 20px; background: #99a9bf; color: white"
      >Kết quả học tập dự kiến</div>
      <el-table
        class="result__data"
        stripe
        :height="tableHeight"
        :data="tableData1"
        style="border: groove"
      >
        <el-table-column prop="Subject" label="Môn học" width="180"></el-table-column>
        <el-table-column prop="MounthTest" label="KT Bài cũ" width="180"></el-table-column>
        <el-table-column prop="FifteenTest" label="KT 15'" width="180"></el-table-column>
        <el-table-column prop="FourtyFiveTest1" label="KT 45'" width="180"></el-table-column>
        <el-table-column prop="SemesterExam" label="Thi học kỳ"></el-table-column>
        <el-table-column prop="TotalScore" label="Tổng kết"></el-table-column>
      </el-table>
    </div>

    <div class="progress__result result" ref="progressResult" v-if="selectedTitle==='Giỏi'">
      <div
        class="progress__title"
        style="margin-bottom: 0; border: groove; text-align: center; 
      border-bottom: none; font-size: 20px; background: #99a9bf; color: white"
      >Kết quả học tập dự kiến</div>
      <el-table
        class="result__data"
        stripe
        :height="tableHeight"
        :data="tableData2"
        style="border: groove"
      >
        <el-table-column prop="Subject" label="Môn học" width="180"></el-table-column>
        <el-table-column prop="MounthTest" label="KT Bài cũ" width="180"></el-table-column>
        <el-table-column prop="FifteenTest" label="KT 15'" width="180"></el-table-column>
        <el-table-column prop="FourtyFiveTest1" label="KT 45'" width="180"></el-table-column>
        <el-table-column prop="SemesterExam" label="Thi học kỳ"></el-table-column>
        <el-table-column prop="TotalScore" label="Tổng kết"></el-table-column>
      </el-table>
    </div>

    <div class="progress__result result" ref="progressResult" v-if="selectedTitle==='Xuất sắc'">
      <div
        class="progress__title"
        style="margin-bottom: 0; border: groove; text-align: center; 
      border-bottom: none; font-size: 20px; background: #99a9bf; color: white"
      >Kết quả học tập dự kiến</div>
      <el-table
        class="result__data"
        stripe
        :height="tableHeight"
        :data="tableData3"
        style="border: groove"
      >
        <el-table-column prop="Subject" label="Môn học" width="180"></el-table-column>
        <el-table-column prop="MounthTest" label="KT Bài cũ" width="180"></el-table-column>
        <el-table-column prop="FifteenTest" label="KT 15'" width="180"></el-table-column>
        <el-table-column prop="FourtyFiveTest1" label="KT 45'" width="180"></el-table-column>
        <el-table-column prop="SemesterExam" label="Thi học kỳ"></el-table-column>
        <el-table-column prop="TotalScore" label="Tổng kết"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Progress",
  computed: {
    desiredTitle: function() {
      return [
        {
          id: 1,
          value: "Xuất sắc",
          lable: "Xuất sắc"
        },
        {
          id: 2,
          value: "Giỏi",
          lable: "Giỏi"
        },
        {
          id: 3,
          value: "Khá",
          lable: "Khá"
        }
      ];
    },
    tableData1: function() {
      const subject1 = {
        subject: "Toán",
        mounth: 6.5,
        fifteen: 6.5,
        fourtyfive1: 6.5,
        fourtyfive2: 6.5,
        semesterexam: 6.5
      };

      const subject2 = {
        subject: "Ngữ Văn",
        mounth: 6.5,
        fifteen: 6.5,
        fourtyfive1: 6.5,
        fourtyfive2: 6.5,
        semesterexam: 6.5
      };

      const subject3 = {
        subject: "Vật Lý",
        mounth: 6.5,
        fifteen: 6.5,
        fourtyfive1: 6.5,
        fourtyfive2: 6.5,
        semesterexam: 6.5
      };

      const subject4 = {
        subject: "Hóa Học",
        mounth: 6.5,
        fifteen: 6.5,
        fourtyfive1: 6.5,
        fourtyfive2: 6.5,
        semesterexam: 6.5
      };

      const subject5 = {
        subject: "Sinh Học",
        mounth: 6.5,
        fifteen: 6.5,
        fourtyfive1: 6.5,
        fourtyfive2: 6.5,
        semesterexam: 6.5
      };

      const subject6 = {
        subject: "Anh Văn",
        mounth: 6.5,
        fifteen: 6.5,
        fourtyfive1: 6.5,
        fourtyfive2: 6.5,
        semesterexam: 6.5
      };

      const subject7 = {
        subject: "Địa Lý",
        mounth: 6.5,
        fifteen: 6.5,
        fourtyfive1: 6.5,
        fourtyfive2: 6.5,
        semesterexam: 6.5
      };

      const subject8 = {
        subject: "Lịch Sử",
        mounth: 6.5,
        fifteen: 6.5,
        fourtyfive1: 6.5,
        fourtyfive2: 6.5,
        semesterexam: 6.5
      };

      const subject9 = {
        subject: "GDCD",
        mounth: 6.5,
        fifteen: 6.5,
        fourtyfive1: 6.5,
        fourtyfive2: 6.5,
        semesterexam: 6.5
      };

      const subject10 = {
        subject: "Công Nghệ",
        mounth: 6.5,
        fifteen: 6.5,
        fourtyfive1: 6.5,
        fourtyfive2: 6.5,
        semesterexam: 6.5
      };

      const subject11 = {
        subject: "Tin Học",
        mounth: 6.5,
        fifteen: 6.5,
        fourtyfive1: 6.5,
        fourtyfive2: 6.5,
        semesterexam: 6.5
      };

      let subs = [];
      subs.push(subject1);
      subs.push(subject2);
      subs.push(subject3);
      subs.push(subject4);
      subs.push(subject5);
      subs.push(subject6);
      subs.push(subject7);
      subs.push(subject8);
      subs.push(subject9);
      subs.push(subject10);
      subs.push(subject11);

      const data = subs.map(s => {
        return {
          Subject: s.subject,
          MounthTest: s.mounth,
          FifteenTest: s.fifteen,
          FourtyFiveTest1: s.fourtyfive1,
          SemesterExam: s.semesterexam,
          TotalScore: (
            (s.mounth + s.fifteen + 2 * s.fourtyfive1 + 3 * s.semesterexam) /
            7
          ).toFixed(2)
        };
      });

      return data;
    },
    tableData2: function() {
      const subject1 = {
        subject: "Toán",
        mounth: 8,
        fifteen: 8,
        fourtyfive1: 8,
        fourtyfive2: 8,
        semesterexam: 8
      };

      const subject2 = {
        subject: "Ngữ Văn",
        mounth: 8,
        fifteen: 8,
        fourtyfive1: 8,
        fourtyfive2: 8,
        semesterexam: 8
      };

      const subject3 = {
        subject: "Vật Lý",
        mounth: 8,
        fifteen: 8,
        fourtyfive1: 8,
        fourtyfive2: 8,
        semesterexam: 8
      };

      const subject4 = {
        subject: "Hóa Học",
        mounth: 8,
        fifteen: 8,
        fourtyfive1: 8,
        fourtyfive2: 8,
        semesterexam: 8
      };

      const subject5 = {
        subject: "Sinh Học",
        mounth: 8,
        fifteen: 8,
        fourtyfive1: 8,
        fourtyfive2: 8,
        semesterexam: 8
      };

      const subject6 = {
        subject: "Anh Văn",
        mounth: 8,
        fifteen: 8,
        fourtyfive1: 8,
        fourtyfive2: 8,
        semesterexam: 8
      };

      const subject7 = {
        subject: "Địa Lý",
        mounth: 8,
        fifteen: 8,
        fourtyfive1: 8,
        fourtyfive2: 8,
        semesterexam: 8
      };

      const subject8 = {
        subject: "Lịch Sử",
        mounth: 8,
        fifteen: 8,
        fourtyfive1: 8,
        fourtyfive2: 8,
        semesterexam: 8
      };

      const subject9 = {
        subject: "GDCD",
        mounth: 8,
        fifteen: 8,
        fourtyfive1: 8,
        fourtyfive2: 8,
        semesterexam: 8
      };

      const subject10 = {
        subject: "Công Nghệ",
        mounth: 8,
        fifteen: 8,
        fourtyfive1: 8,
        fourtyfive2: 8,
        semesterexam: 8
      };

      const subject11 = {
        subject: "Tin Học",
        mounth: 8,
        fifteen: 8,
        fourtyfive1: 8,
        fourtyfive2: 8,
        semesterexam: 8
      };

      let subs = [];
      subs.push(subject1);
      subs.push(subject2);
      subs.push(subject3);
      subs.push(subject4);
      subs.push(subject5);
      subs.push(subject6);
      subs.push(subject7);
      subs.push(subject8);
      subs.push(subject9);
      subs.push(subject10);
      subs.push(subject11);

      const data = subs.map(s => {
        return {
          Subject: s.subject,
          MounthTest: s.mounth,
          FifteenTest: s.fifteen,
          FourtyFiveTest1: s.fourtyfive1,
          SemesterExam: s.semesterexam,
          TotalScore: (
            (s.mounth + s.fifteen + 2 * s.fourtyfive1 + 3 * s.semesterexam) /
            7
          ).toFixed(2)
        };
      });

      return data;
    },
    tableData3: function() {
      const subject1 = {
        subject: "Toán",
        mounth: 9,
        fifteen: 9,
        fourtyfive1: 9,
        fourtyfive2: 9,
        semesterexam: 9
      };

      const subject2 = {
        subject: "Ngữ Văn",
        mounth: 9,
        fifteen: 9,
        fourtyfive1: 9,
        fourtyfive2: 9,
        semesterexam: 9
      };

      const subject3 = {
        subject: "Vật Lý",
        mounth: 9,
        fifteen: 9,
        fourtyfive1: 9,
        fourtyfive2: 9,
        semesterexam: 9
      };

      const subject4 = {
        subject: "Hóa Học",
        mounth: 9,
        fifteen: 9,
        fourtyfive1: 9,
        fourtyfive2: 9,
        semesterexam: 9
      };

      const subject5 = {
        subject: "Sinh Học",
        mounth: 9,
        fifteen: 9,
        fourtyfive1: 9,
        fourtyfive2: 9,
        semesterexam: 9
      };

      const subject6 = {
        subject: "Anh Văn",
        mounth: 9,
        fifteen: 9,
        fourtyfive1: 9,
        fourtyfive2: 9,
        semesterexam: 9
      };

      const subject7 = {
        subject: "Địa Lý",
        mounth: 9,
        fifteen: 9,
        fourtyfive1: 9,
        fourtyfive2: 9,
        semesterexam: 9
      };

      const subject8 = {
        subject: "Lịch Sử",
        mounth: 9,
        fifteen: 9,
        fourtyfive1: 9,
        fourtyfive2: 9,
        semesterexam: 9
      };

      const subject9 = {
        subject: "GDCD",
        mounth: 9,
        fifteen: 9,
        fourtyfive1: 9,
        fourtyfive2: 9,
        semesterexam: 9
      };

      const subject10 = {
        subject: "Công Nghệ",
        mounth: 9,
        fifteen: 9,
        fourtyfive1: 9,
        fourtyfive2: 9,
        semesterexam: 9
      };

      const subject11 = {
        subject: "Tin Học",
        mounth: 9,
        fifteen: 9,
        fourtyfive1: 9,
        fourtyfive2: 9,
        semesterexam: 9
      };

      let subs = [];
      subs.push(subject1);
      subs.push(subject2);
      subs.push(subject3);
      subs.push(subject4);
      subs.push(subject5);
      subs.push(subject6);
      subs.push(subject7);
      subs.push(subject8);
      subs.push(subject9);
      subs.push(subject10);
      subs.push(subject11);

      const data = subs.map(s => {
        return {
          Subject: s.subject,
          MounthTest: s.mounth,
          FifteenTest: s.fifteen,
          FourtyFiveTest1: s.fourtyfive1,
          SemesterExam: s.semesterexam,
          TotalScore: (
            (s.mounth + s.fifteen + 2 * s.fourtyfive1 + 3 * s.semesterexam) /
            7
          ).toFixed(2)
        };
      });

      return data;
    },
    tableHeight: function() {
      if (!this.$refs.progressResult || !this.$refs.progressResult.clientHeight)
        return 600;
      return this.$refs.progressResult.clientHeight - 20;
    }
  },
  mounted: function() {
    this.selectedTitle = this.desiredTitle[this.desiredTitle.length - 1].value;
    this.index = this.desiredTitle[this.desiredTitle.length - 1].id;
  },
  data() {
    return {
      selectedTitle: "",
      index: ""
    };
  },
  methods: {
    //tableData: function(){
    //}
  }
};
</script> 

<style lang="scss" scoped>
.progress {
  width: 100%;
  height: 100%;
  border-radius: 0px;

  &__info {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    margin-bottom: 10px;
  }

  .desired {
    margin: auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    //margin-right: 30px;
    margin-left: 0px;

    & > div {
      margin: auto 5px;
      margin-left: 5px;
    }
  }

  &__result,
  .result {
    height: 90%;
    width: 100%;
    //border: 1px solid plum;

    &__title {
      font-weight: bold;
      margin-bottom: 5px;
    }
    &__data {
      height: 100%;
      width: 100%;
    }
  }

  .progress__title {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    color: rgb(0, 174, 255);
  }
}
</style> 

