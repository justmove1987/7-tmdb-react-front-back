const express = require("express");
const cors = require("cors");
const { getPopularMovies } = require("./controllers/movies");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/movies", getPopularMovies);

app.listen(5000, () => console.log("Servidor a http://localhost:5000"));
