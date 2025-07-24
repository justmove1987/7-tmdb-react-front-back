import type { Movie } from "../types/Movie";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="relative group overflow-hidden rounded shadow-lg">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        <p className="text-sm text-gray-300">🎬 {movie.director}</p>
        <p className="text-sm text-gray-400">👥 {movie.actors.join(", ")}</p>
      </div>
    </div>
  );
};

export default MovieCard;
