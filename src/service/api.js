const apiKey = '7f0dad748ff7b4eb073bc2aebbf95174';

const fetchPopMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`,
  ).then(response => response.json());
};

const fetchMovieByKeyword = keyword => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}&language=en-US&page=1&include_adult=false`,
  ).then(response => response.json());
};

const fetchMovieDetails = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`,
  ).then(response => response.json());
};

const fetchMovieCredits = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
  ).then(response => response.json());
};

const fetchMovieReviews = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`,
  ).then(response => response.json());
};
const moviesAPI = {
  fetchPopMovies,
  fetchMovieByKeyword,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
};

export default moviesAPI;
