// src/components/__tests__/MovieCard.test.tsx
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MovieCard from "../MovieCard";
import type { Movie } from "../../types/Movie";

const mockMovie: Movie = {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    poster_path: "/inception.jpg",
    overview: undefined
};

test("renders movie title and actors", () => {
  render(
    <BrowserRouter>
      <MovieCard movie={mockMovie} />
    </BrowserRouter>
  );

  expect(screen.getByText("Inception")).toBeInTheDocument();
  expect(screen.getByText(/Christopher Nolan/)).toBeInTheDocument();
  expect(screen.getByText(/Leonardo DiCaprio/)).toBeInTheDocument();
});
