<template>
  <div class="adding-page">
    <h2 class="main-title">Adding page</h2>
    <el-form :model="form" label-width="120px" label-position="top">
      <el-form-item label="Title">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="Director">
        <el-input v-model="form.director" />
      </el-form-item>
      <el-form-item label="Year">
        <el-date-picker
          v-model="form.year"
          type="year"
          style="width: 100%"
        />
      </el-form-item>
      <el-form-item label="Poster">
        <el-upload
          v-model:file-list="form.file"
          class="upload-demo"
          drag
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          multiple
          style="width: 100%"
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            Drop file here or <em>click to upload</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
              jpg/png files with a size less than 500kb
            </div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" style="width: 100%">Send movie</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { UploadFilled } from '@element-plus/icons-vue';

const form = reactive({
  title: '',
  director: '',
  year: '',
  file: [],
});

const onSubmit = () => {
  console.log('submit! - ', form);
};

</script>

<style lang="scss" scoped>
.adding-page {
  width: 300px;
  margin: 0 auto;
}
</style>