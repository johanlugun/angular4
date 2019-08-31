import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private apiUrl = 'https://reqres.in/api/users';
  userData: any = {}
  displayToken: string;

  constructor(private router: Router, private http: Http, private authService: AuthService) {
    this.getUsers();
    this.getData();
  }

  getData(){
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }

  getUsers(){
    this.getData().subscribe(data => {
      console.log(data);
      this.userData = data;
    })
  }

  ngOnInit() {
    this.displayToken = this.authService.AccessToken;
    console.log('displayToken: ' + this.displayToken);
    if(this.displayToken.length === 0){
      console.log('Not Logged In');
      this.router.navigateByUrl('');
    } else {
      console.log('Logged In');
    }
  }

}
