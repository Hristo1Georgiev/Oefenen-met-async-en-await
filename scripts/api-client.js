
// My API KEY:
const API_KEY = "339ed4d1ac4049ce952424749f3c119e"

// Function to get the list of all genres:
async function getGenres() {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    const result = await fetch(apiUrl).then(result => result.json());
    return result.genres;
};

// Function to get my favorite movie:
async function getMyFavoriteMovie() {
    const apiUrl = `https://api.themoviedb.org/3/find/tt0770828?api_key=${API_KEY}&external_source=imdb_id`;
    const result = await fetch(apiUrl).then(result => result.json());
    return result.movie_results;
};

// Function to get the ten top rated movies:
async function getTopRatedMovies() {
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`;
    const result = await fetch(apiUrl).then(result => result.json());
    return result.results;
};

// Function to get the ten top rated action movies:
async function getTopRatedActionMovies() {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&page=1&vote_count.gte=18000&with_genres=28`;
    const result = await fetch(apiUrl).then(result => result.json());
    return result.results;
};

// Function to get the movies from 1975:
async function getMadeIn1975Movies() {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_count.desc&include_adult=true&page=1&primary_release_year=1975&year=1975`;
    const result = await fetch(apiUrl).then(result => result.json());
    return result.results;
};