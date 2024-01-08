import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../category/category';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable()
// bu local bir service tir
export class CategoryService {
  constructor(private http: HttpClient) {}
  path = 'http://localhost:3000/category';

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'There is an error ' + err.error.message;
    } else {
      errorMessage = 'This is a System Error';
    }
    return throwError(errorMessage);
  }
}
