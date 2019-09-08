import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/tokenService/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: Object;
  constructor(private tokenservice: TokenService, private router: Router) {}

  ngOnInit() {
    this.user = this.tokenservice.getPayload();
    // console.log(this.user);
  }

  logout() {
    this.tokenservice.deleteToken();
    this.router.navigate(['']);
  }
}
