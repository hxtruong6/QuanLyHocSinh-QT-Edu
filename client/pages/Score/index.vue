<template>
  <div class="grade">
    <div class="grade__info" style="margin-bottom: 15px">
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

    <div class="grade__result result" ref="gradeResult" v-if="selectedSchoolYear==='2017-2018' && semester===1">
      <div class="result__title" style="margin-bottom: 0; border: groove; text-align: center; 
      border-bottom: none; font-size: 20px; background: #99a9bf; color: white">
        Kết quả học tập</div>
      <el-table class="result__data" stripe :height="tableHeight" :data="tableData1718_1" style="border: groove">
        <el-table-column prop="Subject" label="Môn học" width="180"></el-table-column>
        <el-table-column prop="mouthTest" label="KT Bài cũ" width="180"></el-table-column>
        <el-table-column prop="FifteenTest" label="KT 15'" width="180"></el-table-column>
        <el-table-column prop="FourtyFiveTest1" label="KT 45'" width="180"></el-table-column>
        <el-table-column prop="SemesterExam" label="Thi học kỳ"></el-table-column>
        <el-table-column prop="TotalScore" label="Tổng kết"></el-table-column>
      </el-table>
    </div>

    <div class="grade__result result" ref="gradeResult" v-if="selectedSchoolYear==='2017-2018' && semester===2">
      <div class="result__title" style="margin-bottom: 0; border: groove; text-align: center; 
      border-bottom: none; font-size: 20px; background: #99a9bf; color: white">
        Kết quả học tập</div>
      <el-table class="result__data" stripe :height="tableHeight" :data="tableData1718_2" style="border: groove">
        <el-table-column prop="Subject" label="Môn học" width="180"></el-table-column>
        <el-table-column prop="mouthTest" label="KT Bài cũ" width="180"></el-table-column>
        <el-table-column prop="FifteenTest" label="KT 15'" width="180"></el-table-column>
        <el-table-column prop="FourtyFiveTest1" label="KT 45'" width="180"></el-table-column>
        <el-table-column prop="SemesterExam" label="Thi học kỳ"></el-table-column>
        <el-table-column prop="TotalScore" label="Tổng kết"></el-table-column>
      </el-table>
    </div>

    <div class="grade__result result" ref="gradeResult" v-if="selectedSchoolYear==='2018-2019' && semester===1">
      <div class="result__title" style="margin-bottom: 0; border: groove; text-align: center; 
      border-bottom: none; font-size: 20px; background: #99a9bf; color: white">
        Kết quả học tập</div>
      <el-table class="result__data" stripe :height="tableHeight" :data="tableData1819_1" style="border: groove">
        <el-table-column prop="Subject" label="Môn học" width="180"></el-table-column>
        <el-table-column prop="mouthTest" label="KT Bài cũ" width="180"></el-table-column>
        <el-table-column prop="FifteenTest" label="KT 15'" width="180"></el-table-column>
        <el-table-column prop="FourtyFiveTest1" label="KT 45'" width="180"></el-table-column>
        <el-table-column prop="SemesterExam" label="Thi học kỳ"></el-table-column>
        <el-table-column prop="TotalScore" label="Tổng kết"></el-table-column>
      </el-table>
    </div>

    <div class="grade__result result" ref="gradeResult" v-if="selectedSchoolYear==='2018-2019' && semester===2">
      <div class="result__title" style="margin-bottom: 0; border: groove; text-align: center; 
      border-bottom: none; font-size: 20px; background: #99a9bf; color: white">
        Kết quả học tập</div>
      <el-table class="result__data" stripe :height="tableHeight" :data="tableData1819_2" style="border: groove">
        <el-table-column prop="Subject" label="Môn học" width="180"></el-table-column>
        <el-table-column prop="mouthTest" label="KT Bài cũ" width="180"></el-table-column>
        <el-table-column prop="FifteenTest" label="KT 15'" width="180"></el-table-column>
        <el-table-column prop="FourtyFiveTest1" label="KT 45'" width="180"></el-table-column>
        <el-table-column prop="SemesterExam" label="Thi học kỳ"></el-table-column>
        <el-table-column prop="TotalScore" label="Tổng kết"></el-table-column>
      </el-table>
    </div>

    <div class="grade__result result" ref="gradeResult" v-if="selectedSchoolYear==='2019-2020' && semester===1">
      <div class="result__title" style="margin-bottom: 0; border: groove; text-align: center; 
      border-bottom: none; font-size: 20px; background: #99a9bf; color: white">
        Kết quả học tập</div>
      <el-table class="result__data" stripe :height="tableHeight" :data="tableData1920_1" style="border: groove">
        <el-table-column prop="Subject" label="Môn học" width="180"></el-table-column>
        <el-table-column prop="mouthTest" label="KT Bài cũ" width="180"></el-table-column>
        <el-table-column prop="FifteenTest" label="KT 15'" width="180"></el-table-column>
        <el-table-column prop="FourtyFiveTest1" label="KT 45'" width="180"></el-table-column>
        <el-table-column prop="SemesterExam" label="Thi học kỳ"></el-table-column>
        <el-table-column prop="TotalScore" label="Tổng kết"></el-table-column>
      </el-table>
    </div>

    <div class="grade__result result" ref="gradeResult" v-if="selectedSchoolYear==='2019-2020' && semester===2">
      <div class="result__title" style="margin-bottom: 0; border: groove; text-align: center; 
      border-bottom: none; font-size: 20px; background: #99a9bf; color: white">
        Kết quả học tập</div>
      <el-table class="result__data" stripe :height="tableHeight" :data="tableData1920_2" style="border: groove">
        <el-table-column prop="Subject" label="Môn học" width="180"></el-table-column>
        <el-table-column prop="mouthTest" label="KT Bài cũ" width="180"></el-table-column>
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
  name: "Grade",
  computed: {
    schoolYears: function() {
      return [
        /*{
          value: "all",
          label: "Tất cả"
        },*/
        {
          value: "2017-2018",
          label: "2017-2018"
        },
        {
          value: "2018-2019",
          label: "2018-2019"
        },
        {
          value: "2019-2020",
          label: "2019-2020"
        }
      ];
    },
    semesters: function() {
      return [
        { value: 1, label: "Học kỳ 1" },
        { value: 2, label: "Học kỳ 2" },
      ];
    },
    tableData1718_1: function() {
      const subject1 = {
        subject: "Toán",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 9,
        fourtyfive2: 10,
        semesterexam: 10
      };

      const subject2 = {
        subject: " Ngữ Văn",
        mouth: 7,
        fifteen: 5,
        fourtyfive1: 8.5,
        fourtyfive2: 9,
        semesterexam: 8.25
      };

      const subject3 = {
        subject: "Vật Lý",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 8.5,
        fourtyfive2: 10,
        semesterexam: 10
      };

      const subject4 = {
        subject: "Hóa Học",
        mouth: 9.5,
        fifteen: 8,
        fourtyfive1: 8.5,
        fourtyfive2: 10,
        semesterexam: 8
      };

      const subject5 = {
        subject: "Sinh Học",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 8.5,
        fourtyfive2: 10,
        semesterexam: 10
      };

      const subject6 = {
        subject: "Anh Văn",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 8.5,
        fourtyfive2: 10,
        semesterexam: 10
      };

      const subject7 = {
        subject: "Địa Lý",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 8.5,
        fourtyfive2: 10,
        semesterexam: 10
      };

      const subject8 = {
        subject: "Lịch Sử",
        mouth: 9,
        fifteen: 9,
        fourtyfive1: 9.5,
        fourtyfive2: 8,
        semesterexam: 9
      };

      const subject9 = {
        subject: "GDCD",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 8.5,
        fourtyfive2: 10,
        semesterexam: 10
      };

      const subject10 = {
        subject: "Công Nghệ",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 8.5,
        fourtyfive2: 10,
        semesterexam: 10
      };

      const subject11 = {
        subject: "Tin Học",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 8.5,
        fourtyfive2: 10,
        semesterexam: 10
      };

      let subs = [];
      /*for (let i = 0; i < 11; i++) {
        subs.push(subject);
      }*/
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
          /*yearSemester: `${s.year}/${s.semester}`,
          ...s*/
          Subject: s.subject,
          mouthTest: s.mouth,
          FifteenTest: s.fifteen,
          FourtyFiveTest1: s.fourtyfive1,
          SemesterExam: s.semesterexam,
          TotalScore: (
            (s.mouth + s.fifteen + 2 * s.fourtyfive1 + 3 * s.semesterexam) /
            7
          ).toFixed(2)
        };
      });

      return data;
    },
    tableData1718_2: function() {
      const subject1 = {
        subject: "Toán",
        mouth: 10,
        fifteen: 10,
        fourtyfive1: 10,
        fourtyfive2: 10,
        semesterexam: 10
      };

      const subject2 = {
        subject: " Ngữ Văn",
        mouth: 7.5,
        fifteen: 6,
        fourtyfive1: 8.5,
        fourtyfive2: 9,
        semesterexam: 8.25
      };

      const subject3 = {
        subject: "Vật Lý",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 8.5,
        fourtyfive2: 8,
        semesterexam: 9
      };

      const subject4 = {
        subject: "Hóa Học",
        mouth: 9.5,
        fifteen: 10,
        fourtyfive1: 8.5,
        fourtyfive2: 7.5,
        semesterexam: 8
      };

      const subject5 = {
        subject: "Sinh Học",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 8.5,
        fourtyfive2: 10,
        semesterexam: 10
      };

      const subject6 = {
        subject: "Anh Văn",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 9.5,
        fourtyfive2: 10,
        semesterexam: 9.5
      };

      const subject7 = {
        subject: "Địa Lý",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 8.5,
        fourtyfive2: 10,
        semesterexam: 10
      };

      const subject8 = {
        subject: "Lịch Sử",
        mouth: 9,
        fifteen: 9,
        fourtyfive1: 9.5,
        fourtyfive2: 8,
        semesterexam: 9
      };

      const subject9 = {
        subject: "GDCD",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 8.5,
        fourtyfive2: 7,
        semesterexam: 7.5
      };

      const subject10 = {
        subject: "Công Nghệ",
        mouth: 9,
        fifteen: 6,
        fourtyfive1: 8.5,
        fourtyfive2: 8.5,
        semesterexam: 10
      };

      const subject11 = {
        subject: "Tin Học",
        mouth: 9,
        fifteen: 9,
        fourtyfive1: 8.5,
        fourtyfive2: 9.5,
        semesterexam: 10
      };

      let subs = [];
      /*for (let i = 0; i < 11; i++) {
        subs.push(subject);
      }*/
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
          /*yearSemester: `${s.year}/${s.semester}`,
          ...s*/
          Subject: s.subject,
          mouthTest: s.mouth,
          FifteenTest: s.fifteen,
          FourtyFiveTest1: s.fourtyfive1,
          SemesterExam: s.semesterexam,
          TotalScore: (
            (s.mouth + s.fifteen + 2 * s.fourtyfive1 + 3 * s.semesterexam) /
            7
          ).toFixed(2)
        };
      });

      return data;
    },
    tableData1819_1: function() {
      const subject1 = {
        subject: "Toán",
        mouth: 10,
        fifteen: 9.5,
        fourtyfive1: 10,
        fourtyfive2: 10,
        semesterexam: 10
      };

      const subject2 = {
        subject: " Ngữ Văn",
        mouth: 7,
        fifteen: 5.5,
        fourtyfive1: 6.5,
        fourtyfive2: 7,
        semesterexam: 8.25
      };

      const subject3 = {
        subject: "Vật Lý",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 8.5,
        fourtyfive2: 10,
        semesterexam: 10
      };

      const subject4 = {
        subject: "Hóa Học",
        mouth: 9.5,
        fifteen: 8.5,
        fourtyfive1: 7.5,
        fourtyfive2: 6.5,
        semesterexam: 9
      };

      const subject5 = {
        subject: "Sinh Học",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 8.5,
        fourtyfive2: 10,
        semesterexam: 10
      };

      const subject6 = {
        subject: "Anh Văn",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 8.5,
        fourtyfive2: 10,
        semesterexam: 8
      };

      const subject7 = {
        subject: "Địa Lý",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 8.5,
        fourtyfive2: 10,
        semesterexam: 10
      };

      const subject8 = {
        subject: "Lịch Sử",
        mouth: 9,
        fifteen: 9,
        fourtyfive1: 6.5,
        fourtyfive2: 8,
        semesterexam: 9.5
      };

      const subject9 = {
        subject: "GDCD",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 8.5,
        fourtyfive2: 10,
        semesterexam: 10
      };

      const subject10 = {
        subject: "Công Nghệ",
        mouth: 10,
        fifteen: 10,
        fourtyfive1: 8.5,
        fourtyfive2: 9.5,
        semesterexam: 10
      };

      const subject11 = {
        subject: "Tin Học",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 10,
        fourtyfive2: 10,
        semesterexam: 10
      };

      let subs = [];
      /*for (let i = 0; i < 11; i++) {
        subs.push(subject);
      }*/
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
          /*yearSemester: `${s.year}/${s.semester}`,
          ...s*/
          Subject: s.subject,
          mouthTest: s.mouth,
          FifteenTest: s.fifteen,
          FourtyFiveTest1: s.fourtyfive1,
          SemesterExam: s.semesterexam,
          TotalScore: (
            (s.mouth + s.fifteen + 2 * s.fourtyfive1 + 3 * s.semesterexam) /
            7
          ).toFixed(2)
        };
      });

      return data;
    },
    tableData1819_2: function() {
      const subject1 = {
        subject: "Toán",
        mouth: 10,
        fifteen: 10,
        fourtyfive1: 10,
        fourtyfive2: 10,
        semesterexam: 10
      };

      const subject2 = {
        subject: " Ngữ Văn",
        mouth: 9,
        fifteen: 8.5,
        fourtyfive1: 8.5,
        fourtyfive2: 9,
        semesterexam: 8.25
      };

      const subject3 = {
        subject: "Vật Lý",
        mouth: 9,
        fifteen: 9,
        fourtyfive1: 8.5,
        fourtyfive2: 10,
        semesterexam: 10
      };

      const subject4 = {
        subject: "Hóa Học",
        mouth: 9.5,
        fifteen: 10,
        fourtyfive1: 10,
        fourtyfive2: 8,
        semesterexam: 10
      };

      const subject5 = {
        subject: "Sinh Học",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 8.5,
        fourtyfive2: 10,
        semesterexam: 10
      };

      const subject6 = {
        subject: "Anh Văn",
        mouth: 9.5,
        fifteen: 10,
        fourtyfive1: 8.5,
        fourtyfive2: 10,
        semesterexam: 10
      };

      const subject7 = {
        subject: "Địa Lý",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 8.5,
        fourtyfive2: 10,
        semesterexam: 10
      };

      const subject8 = {
        subject: "Lịch Sử",
        mouth: 9,
        fifteen: 9,
        fourtyfive1: 9.5,
        fourtyfive2: 8,
        semesterexam: 9
      };

      const subject9 = {
        subject: "GDCD",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 7.5,
        fourtyfive2: 9.5,
        semesterexam: 10
      };

      const subject10 = {
        subject: "Công Nghệ",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 8.5,
        fourtyfive2: 6,
        semesterexam: 7.5
      };

      const subject11 = {
        subject: "Tin Học",
        mouth: 9,
        fifteen: 10,
        fourtyfive1: 9.5,
        fourtyfive2: 10,
        semesterexam: 10
      };

      let subs = [];
      /*for (let i = 0; i < 11; i++) {
        subs.push(subject);
      }*/
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
          /*yearSemester: `${s.year}/${s.semester}`,
          ...s*/
          Subject: s.subject,
          mouthTest: s.mouth,
          FifteenTest: s.fifteen,
          FourtyFiveTest1: s.fourtyfive1,
          SemesterExam: s.semesterexam,
          TotalScore: (
            (s.mouth + s.fifteen + 2 * s.fourtyfive1 + 3 * s.semesterexam) /
            7
          ).toFixed(2)
        };
      });

      return data;
    },
    tableData1920_1: function() {
      const subject1 = {
        subject: "Toán",
        mouth: "---",
        fifteen: "---",
        fourtyfive1: "---",
        fourtyfive2: "---",
        semesterexam: "---"
      };

      const subject2 = {
        subject: " Ngữ Văn",
        mouth: "---",
        fifteen: "---",
        fourtyfive1: "---",
        fourtyfive2: "---",
        semesterexam: "---"
      };

      const subject3 = {
        subject: "Vật Lý",
        mouth: "---",
        fifteen: "---",
        fourtyfive1: "---",
        fourtyfive2: "---",
        semesterexam: "---"
      };

      const subject4 = {
        subject: "Hóa Học",
        mouth: "---",
        fifteen: "---",
        fourtyfive1: "---",
        fourtyfive2: "---",
        semesterexam: "---"
      };

      const subject5 = {
        subject: "Sinh Học",
        mouth: "---",
        fifteen: "---",
        fourtyfive1: "---",
        fourtyfive2: "---",
        semesterexam: "---"
      };

      const subject6 = {
        subject: "Anh Văn",
        mouth: "---",
        fifteen: "---",
        fourtyfive1: "---",
        fourtyfive2: "---",
        semesterexam: "---"
      };

      const subject7 = {
        subject: "Địa Lý",
        mouth: "---",
        fifteen: "---",
        fourtyfive1: "---",
        fourtyfive2: "---",
        semesterexam: "---"
      };

      const subject8 = {
        subject: "Lịch Sử",
        mouth: "---",
        fifteen: "---",
        fourtyfive1: "---",
        fourtyfive2: "---",
        semesterexam: "---"
      };

      const subject9 = {
        subject: "GDCD",
        mouth: "---",
        fifteen: "---",
        fourtyfive1: "---",
        fourtyfive2: "---",
        semesterexam: "---"
      };

      const subject10 = {
        subject: "Công Nghệ",
        mouth: "---",
        fifteen: "---",
        fourtyfive1: "---",
        fourtyfive2: "---",
        semesterexam: "---"
      };

      const subject11 = {
        subject: "Tin Học",
        mouth: "---",
        fifteen: "---",
        fourtyfive1: "---",
        fourtyfive2: "---",
        semesterexam: "---"
      };

      let subs = [];
      /*for (let i = 0; i < 11; i++) {
        subs.push(subject);
      }*/
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
          /*yearSemester: `${s.year}/${s.semester}`,
          ...s*/
          Subject: s.subject,
          mouthTest: s.mouth,
          FifteenTest: s.fifteen,
          FourtyFiveTest1: s.fourtyfive1,
          SemesterExam: s.semesterexam,
          TotalScore: "---"
        };
      });

      return data;
    },
    tableData1920_2: function() {
      const subject1 = {
        subject: "Toán",
        mouth: "---",
        fifteen: "---",
        fourtyfive1: "---",
        fourtyfive2: "---",
        semesterexam: "---"
      };

      const subject2 = {
        subject: " Ngữ Văn",
        mouth: "---",
        fifteen: "---",
        fourtyfive1: "---",
        fourtyfive2: "---",
        semesterexam: "---"
      };

      const subject3 = {
        subject: "Vật Lý",
        mouth: "---",
        fifteen: "---",
        fourtyfive1: "---",
        fourtyfive2: "---",
        semesterexam: "---"
      };

      const subject4 = {
        subject: "Hóa Học",
        mouth: "---",
        fifteen: "---",
        fourtyfive1: "---",
        fourtyfive2: "---",
        semesterexam: "---"
      };

      const subject5 = {
        subject: "Sinh Học",
        mouth: "---",
        fifteen: "---",
        fourtyfive1: "---",
        fourtyfive2: "---",
        semesterexam: "---"
      };

      const subject6 = {
        subject: "Anh Văn",
        mouth: "---",
        fifteen: "---",
        fourtyfive1: "---",
        fourtyfive2: "---",
        semesterexam: "---"
      };

      const subject7 = {
        subject: "Địa Lý",
        mouth: "---",
        fifteen: "---",
        fourtyfive1: "---",
        fourtyfive2: "---",
        semesterexam: "---"
      };

      const subject8 = {
        subject: "Lịch Sử",
        mouth: "---",
        fifteen: "---",
        fourtyfive1: "---",
        fourtyfive2: "---",
        semesterexam: "---"
      };

      const subject9 = {
        subject: "GDCD",
        mouth: "---",
        fifteen: "---",
        fourtyfive1: "---",
        fourtyfive2: "---",
        semesterexam: "---"
      };

      const subject10 = {
        subject: "Công Nghệ",
        mouth: "---",
        fifteen: "---",
        fourtyfive1: "---",
        fourtyfive2: "---",
        semesterexam: "---"
      };

      const subject11 = {
        subject: "Tin Học",
        mouth: "---",
        fifteen: "---",
        fourtyfive1: "---",
        fourtyfive2: "---",
        semesterexam: "---"
      };

      let subs = [];
      /*for (let i = 0; i < 11; i++) {
        subs.push(subject);
      }*/
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
          /*yearSemester: `${s.year}/${s.semester}`,
          ...s*/
          Subject: s.subject,
          mouthTest: s.mouth,
          FifteenTest: s.fifteen,
          FourtyFiveTest1: s.fourtyfive1,
          SemesterExam: s.semesterexam,
          TotalScore: "---"
        };
      });

      return data;
    },
    tableHeight: function() {
      if (!this.$refs.gradeResult || !this.$refs.gradeResult.clientHeight)
        return 600;
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
    margin-left: 5px;

    & > div {
      margin: auto 5px;
      margin-left: 5px;
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
