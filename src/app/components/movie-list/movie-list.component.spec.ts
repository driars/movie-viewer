import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MovieEffects } from 'src/app/store/effects/movie.effects';
import { movieReducer } from 'src/app/store/reducers/movie.reducer';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { movies } from 'src/app/constants/movies';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let httpTestingController: HttpTestingController;
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieListComponent, MovieItemComponent],
      imports: [
        StoreModule.forRoot({ movies: movieReducer }),
        EffectsModule.forRoot([MovieEffects]),
        HttpClientTestingModule,
        NgbPaginationModule,
      ],
      providers: [MovieService],
    });

    service = TestBed.inject(MovieService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should render all movie items', () => {

    const mockData = movies;

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const req = httpTestingController.expectOne(`${environment.apiUrl}&api_key=${environment.apiKey}&page=1`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockData);

    httpTestingController.verify();

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.desktop-list')?.children.length).toBe(mockData.results.length + 1);

    const children = compiled.querySelector('.desktop-list')?.children;

    if (children) {
      for (let i = 0; i < mockData.results.length; i ++) {
        const html = children.item(i)?.innerHTML;
        expect(html).toContain(mockData.results[i].title);
        expect(html).toContain(mockData.results[i].release_date);
      }
    }
  });

  it('should render loading component while loading', () => {

    const mockData = movies;

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const req = httpTestingController.expectOne(`${environment.apiUrl}&api_key=${environment.apiKey}&page=1`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockData);

    httpTestingController.verify();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.spinner-border')).toBeTruthy();

    fixture.detectChanges();

    expect(compiled.querySelector('.spinner-border')).not.toBeTruthy();
  });

  it('should render error message if there is an error', () => {

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const req = httpTestingController.expectOne(`${environment.apiUrl}&api_key=${environment.apiKey}&page=1`);
    expect(req.request.method).toEqual('GET');
    req.error(new ProgressEvent("Internal Error"));

    httpTestingController.verify();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.spinner-border')).toBeTruthy();

    fixture.detectChanges();

    expect(compiled.querySelector('.error-msg')).toBeTruthy();
    expect(compiled.innerHTML).toContain('Something went wrong!');
  });
});
