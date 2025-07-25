// src/pages/Register.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/movies");
    } catch (err) {
  const error = err as { code?: string; message?: string };

  switch (error.code) {
    case "auth/email-already-in-use":
      setError("Aquest correu ja està registrat.");
      break;
    case "auth/invalid-email":
      setError("El correu no és vàlid.");
      break;
    case "auth/weak-password":
      setError("Contrasenya massa dèbil. Mínim 6 caràcters.");
      break;
    default:
      setError(error.message || "Error al registrar-se.");
  }
}
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded shadow-md w-80 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Registre</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          placeholder="Correu"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white"
          required
        />
        <input
          type="password"
          placeholder="Contrasenya"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Crear compte
        </button>
      </form>
    </div>
  );
};

export default Register;
