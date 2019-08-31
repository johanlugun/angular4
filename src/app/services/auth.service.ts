import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Headers, Http, HttpModule, Response } from '@angular/http';

import { HttpHeaders } from '@angular/common/http';

import { TokenParams } from '../classes/token-params';

@Injectable()
export class AuthService {

  AccessToken:string = "";
  constructor(private http:Http) { }

  private tokenAPI = 'https://reqres.in/api/login';

  login(Email: string, Password: string):Observable<TokenParams>{
    let loginData = {
      'email' : Email,
      'password' : Password
    }

    return this.http.post(this.tokenAPI, loginData)
      .map(res => res.json());
  }
}
