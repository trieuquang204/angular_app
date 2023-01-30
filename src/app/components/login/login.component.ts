import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error : number = 0;

  constructor(
    public router : Router
  ) {}

  ngOnInit() {
    this.checkLogin()
  }

  checkLogin() {
    if(localStorage.getItem('user')) {
      this.router.navigate([''])
    }
  }

  onLogin(username : any, password : any) {
    let user = {
      username: username,
      password: password
    }

    if(username == 'admin' && password == 'admin') {
        localStorage.setItem('user', JSON.stringify(user))
    } else {
      this.error = -1
    }
  }
}
