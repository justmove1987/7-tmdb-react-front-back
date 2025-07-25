import { Link } from "react-router-dom";
import type { Movie } from "../types/Movie";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="relative group overflow-hidden rounded-xl shadow-lg h-[620px] transition-transform duration-300 hover:scale-105">

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover transition duration-300 group-hover:opacity-60 rounded-xl"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
          <div className="bg-black bg-opacity-60 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-white">{movie.title}</h2>
            <p className="text-sm text-gray-200">🎬 {movie.director}</p>
            <p className="text-sm text-gray-300">👥 {movie.actors.join(", ")}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
