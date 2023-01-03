import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  URL: string = 'http://localhost:3000/register';

  constructor(private http: HttpClient) {}

  saveUser(data:any) {
    return this.http.post(this.URL,data)
  }
}
