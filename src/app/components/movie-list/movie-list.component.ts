import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/types';
import * as MovieActions from 'src/app/store/actions/movie.actions';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies$ = this.store.select((state) => state.movies.data.results)
  currentMovie$ = this.store.select((state) => state.movies.currentMovie)

  loading$ = this.store.select((state) => state.movies.loading)
  error$ = this.store.select((state) => state.movies.error)

  page: number = 1;

  constructor(private store: Store<AppState>) {  }

  ngOnInit(): void {
    this.fetchData();
  }

  public onPageChange(): void {
    this.fetchData();
  }

  private fetchData(): void {
    this.store.dispatch(MovieActions.fetchData({ page: this.page }));
  }
}
