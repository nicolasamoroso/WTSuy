import { Movie } from "@/types/movies";
import BackgroundPopCorn from "@/svgs/background-popcorn";
import BackgroundPopCornBucket from "@/svgs/background-popcorn-bucket";
import Form from "@/components/form/form";

const Review = ({ movies }: { movies: Movie[] }) => {
  return (
    <section id="review">
      <h2>Reseña de peliculas</h2>
      <p>Deja tu opinion</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form movies={movies} />
      </div>
      <div className="bucket">
        <BackgroundPopCornBucket />
      </div>
      <div className="popcorn">
        <BackgroundPopCorn />
      </div>
    </section>
  );
};

export default Review;
