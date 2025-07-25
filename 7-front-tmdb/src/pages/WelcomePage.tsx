// src/pages/WelcomePage.tsx
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        Benvingut/da a la Cartellera de Pel·lícules 🎬
      </h1>
      <p className="text-lg text-gray-300 mb-10 text-center max-w-xl">
        Explora les pel·lícules més populars, veu els detalls, i crea la teva pròpia selecció de favorits.
        Inicia sessió o registra’t per començar!
      </p>
      <div className="flex gap-6">
        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg"
        >
          Inicia Sessió
        </Link>
        <Link
          to="/register"
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg text-lg"
        >
          Registra’t
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
