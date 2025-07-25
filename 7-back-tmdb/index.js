const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { getPopularMovies, getMovieById } = require("./controllers/movies");

const app = express();
app.use(cors());

app.get("/api/movies", getPopularMovies);
app.get("/api/movies/:id", getMovieById);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escoltant al port ${PORT}`);
});

