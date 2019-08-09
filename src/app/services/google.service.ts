import { Feedback } from './../models/Feedback';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(
    private http: HttpClient
  ) { }

  postToSheet(form: Feedback): Observable<any> {
    const params = new HttpParams()
      .set('rating', String(form.rating))
      .set('improvement', form.improvement)
      .set('name', form.name || '')
      .set('email', form.email || '')
      .set('created', form.created);

    return this.http.get<any>(
      'https://script.google.com/macros/s/AKfycbwqNxYNqX4v0vTOOrkhwpQA0DUzIYT9VvfCO9t1MMZlQNl-r3wF/exec',
      {params}
    );
  }
}
