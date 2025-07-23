// backend/controllers/movies.js
const axios = require("axios");

const TMDB_API_KEY = process.env.TMDB_API_KEY;

async function getPopularMovies(req, res) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=es-ES&page=1`
    );

    const movies = await Promise.all(
      response.data.results.map(async (movie) => {
        const credits = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${TMDB_API_KEY}`
        );

        const director = credits.data.crew.find((p) => p.job === "Director")?.name || "Desconegut";
        const actors = credits.data.cast.slice(0, 3).map((actor) => actor.name); // Primeres 3

        return {
          id: movie.id,
          title: movie.title,
          director,
          actors,
          poster_path: movie.poster_path,
        };
      })
    );

    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getPopularMovies };
