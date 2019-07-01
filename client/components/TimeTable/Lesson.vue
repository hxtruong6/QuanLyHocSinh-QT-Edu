<template>
  <el-popover placement="bottom" width="250" trigger="click">
    <div class="lessonDetail">
      <p>Môn học: {{lesson.subject}}</p>
      <p>Phòng: {{lesson.room}}</p>
      <p>Tiết: {{lesson.classHour}}</p>
      <p>Giáo viên: {{lesson.teacher}}</p>
    </div>
    <div class="lesson" v-bind:style="styleObject" slot="reference">
      <div class="lesson__subject">{{lesson.subject}}</div>
      <div class="lesson__teacher">{{lesson.teacher}}</div>
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
        top: `${this.position}px`
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
  height: 50px;
  margin: auto;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  &:hover {
    box-shadow: 0 2px 8px rgba(#000, 0.3);
  }

  &__subject {
    font-weight: bold;
  }
  &__teacher {
    font-size: 1.1rem;
  }
}

.lessonDetail {
  font-size: 1.6rem;

  & p:first-child {
    font-weight: bold;
  }
}
</style>
