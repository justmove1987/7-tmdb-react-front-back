// src/components/Header.tsx
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import logo from "../assets/logo.svg";

const Header = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center shadow-md">
      <Link to="/movies" className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold hidden sm:block">Cartellera</h1>
      </Link>

      <nav className="flex gap-4 items-center">
        <Link to="/" className="hover:underline text-sm">
          Inici
        </Link>

        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded text-sm"
          >
            Tanca sessió
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-sm"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded text-sm"
            >
              Registre
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
