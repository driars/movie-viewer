import { MovieState } from "./store/reducers/movie.reducer";

export type ColorModes = 'light' | 'dark';

export interface AppState {
  movies: MovieState
}
