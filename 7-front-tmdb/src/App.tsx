// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./pages/MovieList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        {/* Aquí pots afegir més rutes com /movie/:id més endavant */}
      </Routes>
    </Router>
  );
};

export default App;
