import { useEffect, useState } from "react";
import { Movie } from "../classes/Movie";
import MovieCard from "../components/MovieCard";

interface MovieAPIResponse {
  id: number;
  title: string;
  director: string;
  actors: string[];
  poster_path: string;
}

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/movies")
      .then((res) => res.json())
      .then((data: MovieAPIResponse[]) => {
        const parsed = data.map(
            (m) => new Movie(m.id, m.title, m.director, m.actors, m.poster_path)
        );
        setMovies(parsed);
        });
  }, []);

  return (
    <div className="bg-black min-h-screen p-6 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
