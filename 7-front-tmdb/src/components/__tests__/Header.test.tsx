// src/components/__tests__/Header.test.tsx
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

test("renders the logo and Home link", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
  expect(screen.getByText(/inici/i)).toBeInTheDocument();
});
