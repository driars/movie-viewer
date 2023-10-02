import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MovieEffects } from './store/effects/movie.effects';
import { movieReducer } from './store/reducers/movie.reducer';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, ThemeSwitcherComponent, MovieListComponent, MovieDetailComponent],
    imports: [
      StoreModule.forRoot({ movies: movieReducer }),
      EffectsModule.forRoot([ MovieEffects ]),
      HttpClientModule,
      NgbPaginationModule
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
