import CinemaListings from "@/components/billboard/billboard";
import { Movie } from "@/types/movies";

const Billboard = ({ movies }: { movies: Movie[] }) => {
  return (
    <section id="billboard">
      <h2>En cartelera</h2>
      <CinemaListings movies={movies} />
    </section>
  );
};

export default Billboard;
