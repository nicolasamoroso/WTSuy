import { Movie } from "@/types/movies";
import "@/components/billboard/billboard.css";
import Card from "@/components/billboard/card";
import BackgroundPopCorn from "@/svgs/background-popcorn";

const CinemaListings = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="billboard">
      <div className="background-popcorn">
        <BackgroundPopCorn />
      </div>
      {movies.slice(0, 10).map((movie) => (
        <div key={movie.url}>
          <Card movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default CinemaListings;
