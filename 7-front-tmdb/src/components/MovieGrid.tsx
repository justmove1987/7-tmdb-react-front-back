import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import type { Movie } from "../types/Movie";

const MovieGrid = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(12); // 👈 Mostrem 12 pel·lícules inicialment

  useEffect(() => {
    fetch("http://localhost:5000/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

const filteredMovies = movies.filter((movie) =>
  `${movie.title} ${movie.director}`.toLowerCase().includes(search.toLowerCase())
);


  const visibleMovies = filteredMovies.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 12); // 👈 Carrega 12 més cada cop
  };

  return (
    <div className="flex-grow px-6 pb-10">
      {/* Cercador */}
      <div className="max-w-3xl mx-auto my-8">
        <input
          type="text"
          placeholder="Cerca pel·lícules o directors..."
          className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Grid de pel·lícules */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {visibleMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        {visibleMovies.length === 0 && (
          <p className="text-center col-span-full text-gray-400">Cap pel·lícula trobada.</p>
        )}
      </div>

      {/* Botó View More */}
      {visibleCount < filteredMovies.length && (
        <div className="text-center mt-10">
          <button
            onClick={handleViewMore}
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded"
          >
            View more
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieGrid;
