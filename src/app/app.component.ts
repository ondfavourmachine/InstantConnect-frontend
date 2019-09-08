import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './services/tokenService/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private tokenservice: TokenService) {}
  title = 'instantConnectApp';

  ngOnInit() {
    const token = this.tokenservice.getToken();

    if (token) {
      this.router.navigate(['streams']);
    } else {
      this.router.navigate(['']);
    }
  }
}
