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
        <div class="grid-content bg-purple">
          <class-hour
            v-for="(h,idx) in timeLine"
            :key="h.number"
            class="clasHourRow"
            v-bind:style="{'top': timeLinePos[idx]}"
            :number="h.number"
            :topPos="timeLinePos[idx]"
          ></class-hour>
        </div>
      </el-col>
      <el-col class="day" :span="3" v-for="(lessons,idx) in days" v-bind:key="'day'+idx">
        <div class="grid-content bg-purple-light">
          <lesson
            v-for="(lesson,index) in lessons"
            v-bind:key="'lesson'+ index"
            :lesson="lesson"
            :position="(lesson.classHour-1)*lessonTimeHeight"
          ></lesson>
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
      timeLine: Array.from({ length: 10 }, (v, k) => ({
        number: k + 1,
        top: 24 * k
      })),
      days: [
        [
          {
            subject: "Math",
            classHour: 1,
            room: "F107",
            teacher: "Đỗ Hoàng Cường"
          },
          {
            subject: "IT",
            classHour: 4,
            room: "E07",
            teacher: "Đỗ Hoàng Cường"
          },
          {
            subject: "IT",
            classHour: 6,
            room: "E07",
            teacher: "Đỗ Hoàng Cường"
          }
        ],
        [
          {
            subject: "Math",
            classHour: 3,
            room: "F107",
            teacher: "Đỗ Hoàng Cường"
          },
          {
            subject: "IT",
            classHour: 5,
            room: "E07",
            teacher: "Đỗ Hoàng Cường"
          }
        ],
        [],
        [
          {
            subject: "IT",
            classHour: 9,
            room: "E07",
            teacher: "Đỗ Hoàng Cường"
          }
        ],
        [],
        [],
        []
      ],
      totalLessonTimeHeight: 600,
      lessonTimeHeight: 60
    };
  },
  computed: {
    timeLinePos: function() {
      console.log(this.timeLine.map(tl => tl.top));
      return this.timeLine.map(tl => tl.top);
    }
  },
  mounted() {
    this.totalLessonTimeHeight = this.$refs.lessonTime.$el.clientHeight;
    this.$nextTick(() => {
      for (let i = 0; i < this.timeLine.length; i++) {
        this.timeLine[i].top = (i * this.totalLessonTimeHeight) / 10;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.timeTable {
  width: 100%;
  height: 100%;
  margin: auto;
  .el-row {
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
    height: 600px;

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
