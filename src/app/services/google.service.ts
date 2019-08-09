import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(
    private http: HttpClient
  ) { }

  postToSheet(form: any): Observable<any> {
    const params = new HttpParams()
      .set('rating', form.rating || '')
      .set('improvement', form.rating || '')
      .set('name', form.rating || '')
      .set('email', form.rating || '')
      .set('created', form.rating || '');

    const today = new Date().toDateString() + '';
    return this.http.post<any>(
      'https://script.google.com/macros/s/AKfycbwqNxYNqX4v0vTOOrkhwpQA0DUzIYT9VvfCO9t1MMZlQNl-r3wF/exec',
      params
    );
  }
}
