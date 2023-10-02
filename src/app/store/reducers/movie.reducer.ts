import { createReducer, on } from '@ngrx/store';
import * as MovieActions from '../actions/movie.actions';
import { Movie, MovieResponse } from 'src/app/models/movie.model';

export interface MovieState {
  data: MovieResponse;
  currentMovie?: Movie;
  loading: boolean;
  error: any;
}

export const initialState: MovieState = {
  data: {} as MovieResponse,
  loading: false,
  error: null,
};

export const movieReducer = createReducer(
  initialState,
  on(MovieActions.fetchData, (state) => ({ ...state, loading: true })),
  on(MovieActions.fetchDataSuccess, (state, { data }) => ({ ...state, data, loading: false, currentMovie: data.results.length > 0 ? data.results[0] : undefined })),
  on(MovieActions.fetchDataFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(MovieActions.setCurrentMovie, (state, { data }) => ({ ...state, currentMovie: data }))
);
