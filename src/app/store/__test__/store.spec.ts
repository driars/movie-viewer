import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot, cold } from 'jasmine-marbles';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { MovieEffects } from '../effects/movie.effects';
import { movieReducer } from '../reducers/movie.reducer';
import { AppState } from 'src/app/types';
import * as MovieActions from '../actions/movie.actions';
import { movies } from 'src/app/constants/movies';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { MovieResponse } from 'src/app/models/movie.model';

describe('NgRx', () => {
  let store: Store<AppState>;

  let actions$: Observable<any>;
  let effects: MovieEffects;
  let movieService: jasmine.SpyObj<MovieService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MovieEffects,
        provideMockActions(() => actions$),
        {
          provide: MovieService,
          useValue: jasmine.createSpyObj('MovieService', ['fetchData'])
        }
      ],
      imports: [
        StoreModule.forRoot({ movies: movieReducer })
      ],
    });

    store = TestBed.inject(Store<AppState>);
    effects = TestBed.inject(MovieEffects);
    movieService = TestBed.inject(MovieService) as jasmine.SpyObj<MovieService>;
  });

  it('should dispatch fetchData', () => {
    const mockData = movies;

    movieService.fetchData.and.returnValue(of(mockData));

    actions$ = hot('-a', { a: MovieActions.fetchData({ page: 1 }) });
    const expected = cold('-b', { b: MovieActions.fetchDataSuccess({ data: mockData }) });

    expect(effects.fetchData$).toBeObservable(expected);
  });

  it('should dispatch fetchDataSuccess', () => {
    store.dispatch(MovieActions.fetchDataSuccess({ data: movies }));

    store.select(state => state.movies).subscribe((state) => {
      expect(state.data.results).toEqual(movies.results);
      expect(state.currentMovie).toEqual(movies.results[0]);
      expect(state.loading).toEqual(false);
      expect(state.error).toEqual(null);
    });
  });

  it('should dispatch fetchDataFailure', () => {
    const errorMsg = "Internal server error.";
    store.dispatch(MovieActions.fetchDataFailure({ error: errorMsg }));

    store.select(state => state.movies).subscribe((state) => {
      expect(state.currentMovie).toEqual(undefined);
      expect(state.loading).toEqual(false);
      expect(state.error).toEqual(errorMsg);
    });
  });
});
