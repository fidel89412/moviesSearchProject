<template>
  <div>
    <h2 class="main-title">Movie page</h2>
    
    <div class="movie">
      <img :src="movie.Poster" alt="poster" class="poster">
      <div class="movie__item">
        <div class="movie-item__title"><strong>Title</strong> - {{movie.Title}}</div>
        <div><strong>Director</strong> - {{movie.Director}}</div>
        <div><strong>Year</strong> - {{movie.Year}}</div>
        <div>Movie - <strong>{{ $route.params.slug }}</strong></div>
      </div>
    </div>
    <div class="center">
      <el-button type="primary" @click="$router.go(-1)">Back to search</el-button>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import { useMovieStore } from '../store/MovieStore'
const movieStore = useMovieStore();
// const movie = movieStore.movies[0];
const movie = movieStore.movieSingle;
</script>

<style lang="scss" scoped>
.movie {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
    font-size: 20px;
  }
}
.poster {
  max-width: 300px;
}
.movie-item__title {
  font-size: 25px;
}
</style>