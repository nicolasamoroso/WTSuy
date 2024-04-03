import { useEffect, useState } from "react";
import fetchMovies from "./api/movie-list";
import { Movie } from "./types/movies";
import TopMovies from "@/components/top-movies";
import Billboard from "@/components/billboard";
import Review from "@/components/review";
import "./App.css";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data.movies);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching films:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const top3Movies = movies.sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div style={{ position: "relative" }}>
      <TopMovies movies={top3Movies} />
      <Billboard movies={movies} />
      <Review movies={movies} />
    </div>
  );
}

export default App;
