export type Movie = {
  title: string;
  url: string;
  poster: string;
  description: string;
  rating: number;
  images: string[];
  featured: boolean;
};

export type MoviesResponse = {
  movies: Movie[];
};
