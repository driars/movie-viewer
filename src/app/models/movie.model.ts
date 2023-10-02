export interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
