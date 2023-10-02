import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemComponent } from './movie-item.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MovieEffects } from 'src/app/store/effects/movie.effects';
import { movieReducer } from 'src/app/store/reducers/movie.reducer';

describe('MovieItemComponent', () => {
  let component: MovieItemComponent;
  let fixture: ComponentFixture<MovieItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieItemComponent],
      imports: [
        StoreModule.forRoot({ movies: movieReducer }),
        EffectsModule.forRoot([ MovieEffects ]),
        HttpClientModule
      ]
    });
    fixture = TestBed.createComponent(MovieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
