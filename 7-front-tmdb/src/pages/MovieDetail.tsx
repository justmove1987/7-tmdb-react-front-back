import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Movie } from "../types/Movie";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p className="text-white p-6">Carregant...</p>;

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Header />

      <main className="flex-grow p-6 max-w-6xl mx-auto">
  <div className="flex flex-col md:flex-row gap-8 items-start">
    {/* Cartell a l'esquerra */}
    <div className="w-full md:w-1/3">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full rounded shadow-lg"
      />
    </div>

    {/* Informació a la dreta */}
    <div className="w-full md:w-2/3 text-white space-y-4">
      <h1 className="text-4xl font-bold">{movie.title}</h1>
      <p><span className="font-semibold">🎬 Director:</span> {movie.director}</p>
      <p><span className="font-semibold">👥 Actors:</span> {movie.actors.join(", ")}</p>
      <p className="text-gray-300"><span className="font-semibold">📝 Sinopsi:</span> {movie.overview}</p>

      <button
        onClick={() => history.back()}
        className="mt-6 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm"
      >
        ← Tornar
      </button>
    </div>
  </div>
</main>

      <Footer />
    </div>
  );
};

export default MovieDetail;
