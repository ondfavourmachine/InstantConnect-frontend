import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../tokenService/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenservice: TokenService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };

    const token = this.tokenservice.getToken();
    if (token) {
      headersConfig['Authorization'] = `Bearer ${token}`;
    }
    const _req = req.clone({ setHeaders: headersConfig });
    return next.handle(_req);
  }
}
