<template>
  <div class="hour">{{hour}}H</div>
</template>

<script>
export default {
  name: "Hour",
  props: ["hour"]
};
</script>

<style lang="scss" scoped>
.hour {
  width: 100%;

  box-sizing: border-box;
  &:not(:first-child) {
    border-top: 0.3px solid $primary-color;
  }
}
</style>
