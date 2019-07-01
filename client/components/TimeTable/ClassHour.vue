<template>
  <div class="hour">Tiết {{number}}</div>
</template>

<script>
export default {
  name: "ClassHour",
  props: ["number"]
};
</script>

<style lang="scss" scoped>
.hour {
  width: 100%;

  // box-sizing: border-box;
  // &:not(:first-child) {
  //   border-top: 0.3px solid $primary-color;
  // }
}
</style>
