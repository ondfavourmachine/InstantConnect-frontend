import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/tokenService/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {
  token: string;
  constructor(private tokenservice: TokenService, private router: Router) {}

  ngOnInit() {
    this.token = this.tokenservice.getToken();
  }
}
