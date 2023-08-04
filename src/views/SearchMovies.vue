<template>
  <div v-loading.fullscreen.lock="movieStore.isLoading">
    <h2 class="main-title">Search page (movies - {{movieStore.totalMovies}})</h2>
    <div>
      <el-carousel v-if="movieStore.movies.length >= 1" type="card" height="auto">
        <el-carousel-item v-for="item in movieStore.movies" :key="item.imdbID">
          <movie-item :item="item" @click="openMovie(item.imdbID)"/>
        </el-carousel-item>
      </el-carousel>
      <el-empty v-else description="description" />
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import router from '@/router';
import MovieItem from '@/components/MovieItem.vue';
MovieItem
import { useMovieStore } from '../store/MovieStore'
const movieStore = useMovieStore();
const openMovie = (id) => {
  movieStore.setSingleId(id);
  router.push({path: `/movie/${id}`});
  // router.push({name: 'Movie', params: {slug: search.value}});
}
const movieApi = movieStore.getMovies(movieStore.search);
</script>

<style lang="scss" scoped>
.el-carousel__item {
  height: 500px;
}
</style>