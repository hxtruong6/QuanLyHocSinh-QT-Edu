<template>
  <div>Main</div>
</template>

<script>
import ImageUpload from "~/components/ImageUpload.vue";
import ImageShow from "~/components/ImageShow.vue";
import ImageInfo from "~/components/ImageInfo.vue";

export default {
  name: "DetectorPage",
  components: {
    ImageUpload,
    ImageShow,
    ImageInfo
  }
};
</script>

<style>
.detector {
  display: flex;
  flex: 1 1 0;
  flex-direction: row;
  justify-content: space-between;
}
</style>
