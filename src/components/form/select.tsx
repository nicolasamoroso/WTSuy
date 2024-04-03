import ArrowDown from "@/svgs/arrow-down";
import { Movie } from "@/types/movies";

const Select = ({
  movies,
  label,
  name,
  value,
  onChange,
}: {
  movies: Movie[];
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <div className="select">
      <label>{label}</label>
      <div className="custom-select">
        <select name={name} value={value} onChange={onChange}>
          {movies.map((movie) => (
            <option key={movie.url} value={movie.title}>
              {movie.title}
            </option>
          ))}
        </select>
        <ArrowDown />
      </div>
    </div>
  );
};

export default Select;
