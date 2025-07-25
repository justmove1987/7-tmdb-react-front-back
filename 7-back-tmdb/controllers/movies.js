const axios = require("axios");

const TMDB_API_KEY = process.env.TMDB_API_KEY;

// 🔹 Ruta per obtenir les pel·lícules populars
async function getPopularMovies(req, res) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=es-ES&page=1`
    );

    const movies = await Promise.all(
      response.data.results.map(async (movie) => {
        const creditsRes = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${process.env.TMDB_API_KEY}`
        );

        const director = creditsRes.data.crew.find((p) => p.job === "Director")?.name || "Desconegut";
        const actors = creditsRes.data.cast.slice(0, 3).map((a) => a.name);

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
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error carregant les pel·lícules." });
  }
}

// 🔹 Ruta per obtenir una pel·lícula per ID
async function getMovieById(req, res) {
  const { id } = req.params;

  try {
    const [detailsRes, creditsRes] = await Promise.all([
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=es-ES`),
      axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}`),
    ]);

    const movie = detailsRes.data;
    const director = creditsRes.data.crew.find((p) => p.job === "Director")?.name || "Desconegut";
    const actors = creditsRes.data.cast.slice(0, 5).map((a) => a.name);

    res.json({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      director,
      actors,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error carregant la pel·lícula." });
  }
}

module.exports = {
  getPopularMovies,
  getMovieById,
};
