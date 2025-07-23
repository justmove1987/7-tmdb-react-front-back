// src/components/MovieCard.tsx
import { Movie } from "../classes/Movie";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md text-white">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
        alt={movie.title}
        className="w-full h-auto"
      />
      <div className="p-3">
        <h2 className="text-lg font-semibold mb-1">{movie.title}</h2>
        <p className="text-sm text-gray-300">🎬 Director: {movie.director}</p>
        <p className="text-sm text-gray-400">👥 Actors: {movie.getShortCast()}</p>
      </div>
    </div>
  );
};

export default MovieCard;
