import { createAction, props } from '@ngrx/store';
import { Movie, MovieResponse } from 'src/app/models/movie.model';

export const fetchData = createAction('[Movie] Fetch Movie', props<{ page?: number }>());
export const fetchDataSuccess = createAction('[Movie] Fetch Movie Success', props<{ data: MovieResponse }>());
export const fetchDataFailure = createAction('[Movie] Fetch Movie Failure', props<{ error: any }>());
export const setCurrentMovie = createAction('[Movie] Set Current Movie', props<{ data?: Movie }>());
