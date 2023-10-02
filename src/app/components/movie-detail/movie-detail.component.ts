import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../types';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {

  movie?: Movie;

  constructor(private store: Store<AppState>) {
    this.store.select((state) => state.movies.currentMovie).subscribe(e => {
      this.movie = e;
    })
  }
}
