import AboutMovie from "@/components/carousel/about-movie";
import CarouselImg from "@/components/carousel/carousel-img";
import { Movie } from "@/types/movies";
import Score from "@/components/carousel/score";
import { ReviewButton, TrailerButton } from "@/components/button/button";

const FilmContainer = ({ movie }: { movie: Movie }) => {
  return (
    <div className="container">
      <div className="film-poster">
        <CarouselImg src={movie.poster} alt={movie.title} />
        <Score score={movie.rating} />
      </div>
      <div>
        <AboutMovie title={movie.title} description={movie.description} />
        <h1 className="about-title-responsive">{movie.title}</h1>
        <div style={{ display: "flex", gap: "30px", justifyContent: "center" }}>
          <TrailerButton
            onClick={() => {
              window.location.href = movie.url;
            }}
          >
            Ver trailer
          </TrailerButton>
          <ReviewButton href="#review">Dejar reseña</ReviewButton>
        </div>
      </div>
    </div>
  );
};

export default FilmContainer;
