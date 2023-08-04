import { defineStore } from 'pinia'
const url = 'http://www.omdbapi.com/?i=tt38 96198&apikey=bd82a067&page=2&s='

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    isLoading: false,
    search: '',
    singleId: '',
    movies: [],
  }),
  getters: {
    totalMovies: (state) => state.movies.length,
    movieSingle: (state) => state.movies.find(el => el.imdbID.includes(state.singleId)),
  },
  actions: {
    setSearch(string) {
      this.search = string;
    },
    setSingleId(string) {
      this.singleId = string;
    },
    setMovies(payload) {
      this.movies = payload;
    },
    async getMovies(title) {
      try {
        this.isLoading = true;
        const response = await fetch(`${url}${title.toLowerCase()}`);
        const data = await response.json();
        this.setMovies(data.Search);
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
})