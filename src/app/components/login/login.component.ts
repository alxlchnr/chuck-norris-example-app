import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Credentials} from '../../models/credentials';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output()
  loginResult = new EventEmitter();

  credentials: Credentials = {} as Credentials;

  error: string;


  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  doLogin() {
    const loginResult = this.authService.login(this.credentials);
    if(!loginResult){
      this.error = 'The login was not successfull'
    }
    this.loginResult.emit(loginResult);
  }

}
