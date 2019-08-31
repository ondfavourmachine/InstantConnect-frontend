import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:3000/api/instantconnect';
  constructor(private http: HttpClient) {}

  registerUser(body: Object): Observable<any> {
    return this.http.post(`${this.url}/register`, body);
  }
}
