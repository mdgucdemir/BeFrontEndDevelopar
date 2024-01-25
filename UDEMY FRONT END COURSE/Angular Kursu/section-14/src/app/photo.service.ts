import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface CallResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  baseUrl: string = 'https://api.unsplash.com/';
  random: string = 'photos/random';

  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http.get<CallResponse>(this.baseUrl + this.random, {
      headers: {
        Authorization: 'Client-ID VnkmRTWE_oe75Icw5KBeWOgtRAd2AwI4cNae3gS6jh0',
      },
    });
  }
}
