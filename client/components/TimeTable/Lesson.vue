<template>
  <el-popover placement="bottom" width="200" trigger="click">
    <div class="lessonDetail">
      <p>Subject {{lesson.subject}}</p>
      <p>Time start: {{lesson.timeStart}}h</p>
      <p>Time end: {{lesson.timeEnd}}h</p>
      <p>Room: {{lesson.room}}</p>
      <p>Teacher: {{lesson.teacher}}</p>
    </div>
    <div class="lesson" v-bind:style="styleObject" slot="reference">
      <div class="lesson__subject">{{lesson.subject}}</div>
      <div class="lesson__time">{{lesson.timeStart}} - {{lesson.timeEnd}}H</div>
      <div v-if="lesson.timeEnd-lesson.timeStart>1.5" class="lesson__room">{{lesson.room}}</div>
    </div>
  </el-popover>
</template>

<script>
export default {
  name: "Lesson",
  props: ["lesson", "position"],
  data() {
    return {
      styleObject: {
        top: `${this.position.top}%`,
        bottom: `${this.position.bottom}%`
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.lesson {
  background-color: $purple-light;
  position: absolute;
  width: 90%;
  box-sizing: border-box;
  border: 0.2px solid $purple;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  font-size: 1.3rem;
  cursor: pointer;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  &:hover {
    box-shadow: 0 2px 8px rgba(#000, 0.3);
  }

  &__subject {
    font-weight: bold;
  }
  &__time {
    font-weight: bold;
  }
  &__room {
  }
}

.lessonDetail {
  font-size: 1.6rem;

  & p:first-child {
    font-weight: bold;
  }
}
</style>
