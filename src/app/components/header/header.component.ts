import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/tokenService/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private tokenservice: TokenService, private router: Router) {}

  ngOnInit() {}

  logout() {
    this.tokenservice.deleteToken();
    this.router.navigate(['']);
  }
}
