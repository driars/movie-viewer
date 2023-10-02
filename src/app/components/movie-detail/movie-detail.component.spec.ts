import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';
import { StoreModule } from '@ngrx/store';
import { movieReducer } from 'src/app/store/reducers/movie.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from 'src/app/store/effects/movie.effects';
import { HttpClientModule } from '@angular/common/http';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailComponent],
      imports: [
        StoreModule.forRoot({ movies: movieReducer }),
        EffectsModule.forRoot([ MovieEffects ]),
        HttpClientModule
      ]
    });
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
