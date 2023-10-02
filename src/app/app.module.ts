import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { movieReducer } from './store/reducers/movie.reducer';
import { MovieEffects } from './store/effects/movie.effects';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { NgbPaginationModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ThemeSwitcherComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbModule,
    StoreModule.forRoot({ movies: movieReducer }),
    EffectsModule.forRoot([ MovieEffects ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
