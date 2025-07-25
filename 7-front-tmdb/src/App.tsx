import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Home from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";  // 👈 Importem el detall
import RequireAuth from "./components/RequireAuth";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Pàgina inicial */}
          <Route path="/" element={<WelcomePage />} />

          {/* Login i Registre */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Llistat de pel·lícules (protegida) */}
          <Route
            path="/movies"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />

          {/* Detall de pel·lícula (protegida també) */}
          <Route
            path="/movie/:id"
            element={
              <RequireAuth>
                <MovieDetail />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
