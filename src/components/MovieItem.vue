<template>
  <el-card :body-style="{ padding: '0px' }">
    <img
      :src="item.Poster"
      class="image"
      alt="poster"
    />
    <div style="padding: 15px; text-align: center;">
      <div class="title">Title - {{item.Title}}</div>
      <div>Director - {{item.Director}}</div>
      <div>Year - {{item.Year}}</div>
    </div>
  </el-card>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => {}
  }
});

</script>

<style lang="scss" scoped>
.title {
  font-size: 20px;
  font-weight: bold;
}
.el-card {
  width: 250px;
  margin: 0 auto;
}
.image {
  width: 100%;
}
</style>
