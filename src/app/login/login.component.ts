import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { TokenParams } from '../classes/token-params';
import { AuthService } from '../services/auth.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginApiUrl = 'https://reqres.in/api/login';
  userData: any = {}
  email: string;
  password: string;
  tokenParam : TokenParams;

  constructor(private http: Http, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }

  login() : void {
    let loginData = {
      'email' : this.email,
      'password' : this.password
    }

    /* "email": "eve.holt@reqres.in",
    "password": "cityslicka" */

    this.authService.login(this.email, this.password)
      .subscribe(data => {
        this.tokenParam = data;
        this.authService.AccessToken = this.tokenParam.token;
        console.log('Login Successful..');
        this.router.navigateByUrl('details');
      }, err=> {
        console.log('Login Failed..');
        console.log(err);
        // this.router.navigateByUrl('');
      });
  }
}
