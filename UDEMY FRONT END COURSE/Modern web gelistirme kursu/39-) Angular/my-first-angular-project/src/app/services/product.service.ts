import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable()
// bu local bir service tir
export class ProductService {
  constructor(private http: HttpClient) {}
  path = 'http://localhost:3000/products';

  getProducts(categoryId: number): Observable<Product[]> {
    let newPath = this.path;

    if (categoryId) {
      newPath += '?categoryId=' + categoryId;
    }

    return this.http.get<Product[]>(newPath).pipe(
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
