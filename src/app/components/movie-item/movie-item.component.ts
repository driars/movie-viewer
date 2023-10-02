import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from 'src/app/models/movie.model';
import { AppState } from 'src/app/types';
import * as MovieActions from 'src/app/store/actions/movie.actions';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() movie?: Movie;
  @Input() selected: boolean = false;

  constructor(private store: Store<AppState>) { }

  public onClick() {
    this.store.dispatch(MovieActions.setCurrentMovie({ data: this.movie }));
  }
}
