// src/pages/Login.tsx
import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/movies";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Introdueix el correu i la contrasenya.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(from, { replace: true });
    
    } catch (err) {
        console.error(err);
      setError("Credencials incorrectes.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Inicia sessió</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="email"
          placeholder="Correu electrònic"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
        />
        <input
          type="password"
          placeholder="Contrasenya"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Entrar
        </button>

        <p className="mt-4 text-sm text-gray-400">
          Encara no tens compte?{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            Registra't aquí
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
