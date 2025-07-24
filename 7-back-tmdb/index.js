const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { getPopularMovies } = require("./controllers/movies");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Aquí registrem la ruta:
app.get("/api/movies", getPopularMovies);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escoltant al port ${PORT}`);
});
