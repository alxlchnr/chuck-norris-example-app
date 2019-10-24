import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Credentials} from '../../models/credentials';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials: Credentials = {} as Credentials;

  error: string;


  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  doLogin() {
    const loginResult = this.authService.login(this.credentials);
    if(!loginResult){
      this.error = 'The login was not successfull'
    }else{
      this.router.navigate(['/joke'])
    }
  }

}
