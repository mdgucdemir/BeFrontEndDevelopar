import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  err: any;
  public baseUrl = 'http://localhost:3000';

  constructor(public http: HttpClient) {}

  postReq(url: any, data: any) {
    return this.http.post<any>(this.baseUrlUpdate(url), data, {
      headers: new HttpHeaders({
        'Contetn-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': this.baseUrlUpdate(url),
      }),
    });
  }

  getReg(url: any) {
    return this.http.get<any>(this.baseUrlUpdate(url), {
      headers: new HttpHeaders({
        'Contetn-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': this.baseUrlUpdate(url),
      }),
    });
  }

  putReq(url: any, data: any) {
    return this.http.put<any>(this.baseUrlUpdate(url), data, {
      headers: new HttpHeaders({
        'Contetn-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': this.baseUrlUpdate(url),
      }),
    });
  }

  protected baseUrlUpdate(url: string): string {
    return url.startsWith('/') ? this.baseUrl + url : url;
  }
}
