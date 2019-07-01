<template>
  <div :ref="`hour${number}`" class="hour" :style="{'top': topPos}">
    <div class="hour__title">Tiết {{number}}</div>
  </div>
</template>

<script>
export default {
  name: "ClassHour",
  props: ["number", "topPos"]
};
</script>

<style lang="scss" scoped>
.hour {
  width: 100%;
  position: relative;
  height: 60px;
  display: flex;
  &:not(:first-child) {
    border-top: 0.3px solid $primary-color;
  }
  &__title {
    margin: auto;
  }
}
</style>
