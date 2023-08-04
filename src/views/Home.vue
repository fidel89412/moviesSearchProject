<template>
  <div class="home">
    <h2 class="main-title">Home page</h2>
    <div class="search-block">
      <el-input v-model="search" placeholder="Search by movie title" style="width: 20rem" @keyup.enter="searchMovie"/>
      <el-button type="primary" :icon="Search" @click="searchMovie">Search</el-button>
    </div>
  </div>
</template>

<script setup>
  import router from '@/router';
  import { ref } from 'vue';
  import { Search } from '@element-plus/icons-vue';
  import { useMovieStore } from '../store/MovieStore'
  const movieStore = useMovieStore();

  const search = ref('');
  const searchMovie = () => {
    if(search.value.length < 1) return;
    movieStore.setSearch(search.value);
    router.push('/search');
  };
</script>

<style lang="scss" scoped>
  .search-block {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>