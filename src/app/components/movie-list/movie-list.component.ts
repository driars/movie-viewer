import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/types';
import * as MovieActions from 'src/app/store/actions/movie.actions';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  movies$ = this.store.select((state) => state.movies.data.results)
  currentMovie$ = this.store.select((state) => state.movies.currentMovie)

  constructor(private store: Store<AppState>) {  }

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData(): void {
    this.store.dispatch(MovieActions.fetchData({}));
  }
}
