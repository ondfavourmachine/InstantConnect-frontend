import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private cs: CookieService) {}

  setToken(token: string): void {
    this.cs.set('chat_token', token);
  }

  getToken(): string {
    return this.cs.get('chat_token');
  }

  deleteToken(): void {
    this.cs.delete('chat_token');
  }

  getPayload(): Object {
    const token: string = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = JSON.parse(atob(payload));
    }

    return payload.data;
  }
}
