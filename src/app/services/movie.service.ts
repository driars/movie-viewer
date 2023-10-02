import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieResponse } from '../models/movie.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  constructor(private http: HttpClient) {}

  fetchData(page?: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${environment.apiUrl}&api_key=${environment.apiKey}&page=${page ?? 1}`);
  }
}
