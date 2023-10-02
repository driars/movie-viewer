import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as MovieActions from '../actions/movie.actions';
import { MovieService } from 'src/app/services/movie.service';

@Injectable()
export class MovieEffects {
  constructor(private actions$: Actions, private movieService: MovieService) {}

  fetchData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.fetchData),
      mergeMap((e) =>
        this.movieService.fetchData(e.page).pipe(
          map((data) => MovieActions.fetchDataSuccess({ data })),
          catchError((error) => of(MovieActions.fetchDataFailure({ error })))
        )
      )
    )
  );
}
