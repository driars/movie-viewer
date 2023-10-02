import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './store/effects/movie.effects';
import { movieReducer } from './store/reducers/movie.reducer';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ThemeSwitcherComponent,
    MovieDetailComponent,
    MovieListComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot({ movies: movieReducer }),
    EffectsModule.forRoot([ MovieEffects ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
