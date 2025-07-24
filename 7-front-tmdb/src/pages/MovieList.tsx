import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieGrid from "../components/MovieGrid";

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      <Header />
      <MovieGrid />
      <Footer />
    </div>
  );
};

export default Home;
