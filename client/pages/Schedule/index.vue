<template>
  <div class="timeTable">
    <el-row class="timeTable__dayOfWeek">
      <el-col :span="2">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light">Thứ 2</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">Thứ 3</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light">Thứ 4</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">Thứ 5</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light">Thứ 6</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">Thứ 7</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light">Chủ nhật</div>
      </el-col>
    </el-row>
    <el-row class="timeTable__lessonTime lessonTime" ref="lessonTime">
      <el-col :span="2">
        <div class="grid-content bg-purple lessonTime__timeLine">
          <el-row class="clasHourRow" v-for="h in timeLine" v-bind:key="h">
            <class-hour :number="h"></class-hour>
          </el-row>
        </div>
      </el-col>
      <el-col class="day" :span="3" v-for="(lessons,idx) in days" v-bind:key="'day'+idx">
        <div class="grid-content bg-purple-light">
          <lesson
            v-for="(lesson,index) in lessons"
            v-bind:key="'lesson'+ index"
            :lesson="lesson"
            :position="calLessonPos(lesson.timeStart, lesson.timeEnd)"
          ></lesson>
          <!-- <lesson :lesson="lesson"></lesson> -->
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Lesson from "~/components/TimeTable/Lesson.vue";
import ClassHour from "~/components/TimeTable/ClassHour.vue";
export default {
  components: { Lesson, ClassHour },
  data() {
    return {
      timeLine: Array.from({ length: 10 }, (v, k) => k + 1),
      days: [
        [
          {
            subject: "Math",
            timeStart: 6,
            timeEnd: 8.5,
            room: "F107"
          },
          { subject: "IT", timeStart: 15.8, timeEnd: 17.6, room: "E07" },
          { subject: "IT", timeStart: 10, timeEnd: 11, room: "E07" }
        ],
        [
          {
            subject: "Math",
            timeStart: 8,
            timeEnd: 10,
            room: "F107"
          },
          { subject: "IT", timeStart: 16, timeEnd: 17.6, room: "E07" }
        ],
        [],
        [{ subject: "IT", timeStart: 16, timeEnd: 17, room: "E07" }],
        [],
        [],
        []
      ]
    };
  },
  methods: {
    calLessonPos(start, end) {
      const top = ((start - 6) / 13) * 100;
      const bottom = 100 - ((end - 6) / 13) * 100;
      // console.log("xxx 201 position cal: ", top, bottom);
      return { top, bottom };
    }
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
    // border: 0.5px solid $white;
    margin-bottom: 01px;
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
  &__lessonTime,
  .lessonTime {
    width: 100%;
    height: 70%;
    min-height: 50%;
    max-height: 80%;

    .el-col {
      height: 100%;
      position: relative;
      box-sizing: border-box;

      & > div {
        height: 100%;
      }
    }
    .day {
      border-left: 2px solid $primary-color;
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
