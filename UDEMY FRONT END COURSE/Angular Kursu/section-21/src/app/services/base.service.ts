import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  err: any;
  public baseUrl = 'http://localhost:3000';

  constructor(public http: HttpClient) {}

  postReq(url: any, data: any) {
    return this.http.post<any>(this.baseUrlUpdate(url), data);
  }

  getReg(url: any) {
    return this.http.get<any>(this.baseUrlUpdate(url));
  }

  putReq(url: any, data: any) {
    return this.http.put<any>(this.baseUrlUpdate(url), data);
  }

  protected baseUrlUpdate(url: string): string {
    return url.startsWith('/') ? this.baseUrl + url : url;
  }
}
