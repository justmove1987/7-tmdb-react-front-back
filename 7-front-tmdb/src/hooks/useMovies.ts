import { useEffect, useState } from "react";
import type { Movie } from "../types/Movie";

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/movies")
      .then((res) => res.json())
      .then(setMovies);
  }, []);

  return { movies };
}
