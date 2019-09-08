import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl = `http://localhost:3000/api/instantconnect`;
  constructor(private http: HttpClient) {}

  addPost(body): Observable<any> {
    return this.http.post(`${this.postUrl}/posts/add`, body);
  }
}
