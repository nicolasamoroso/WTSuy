import StarFilled from "@/svgs/star-filled";

const Score = ({ score }: { score: number }) => {
  return (
    <div className="score">
      <StarFilled />
      <p>
        {score}
        <span>/10</span>
      </p>
      <small>IMDB</small>
    </div>
  );
};

export default Score;
