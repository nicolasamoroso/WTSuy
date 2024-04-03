import Carousel from "@/components/carousel/carousel";
import { Movie } from "@/types/movies";

const TopMovies = ({ movies }: { movies: Movie[] }) => {
  return (
    <section id="top-movies">
      <Carousel movies={movies} />
    </section>
  );
};

export default TopMovies;
