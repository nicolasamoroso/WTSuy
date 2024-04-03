import { MoviesResponse } from "../types/movies";

async function fetchMovies(): Promise<MoviesResponse> {
  const response = await fetch(
    "https://raw.githubusercontent.com/wtuydev/test-json/main/films.json"
  );
  if (!response.ok) throw new Error("Failed to fetch films");

  return await response.json();
}

export default fetchMovies;
