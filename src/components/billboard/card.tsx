import { BuyTicketTwo } from "@/components/button/button";
import { Movie } from "@/types/movies";

const Card = ({ movie }: { movie: Movie }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 className="movie-title">{movie.title}</h2>
      <img
        src={movie.poster}
        alt={movie.title}
        width={160}
        height={283.54}
        className="poster"
      />
      <BuyTicketTwo>Comprar ticket</BuyTicketTwo>
    </div>
  );
};

export default Card;
