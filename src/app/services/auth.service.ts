import {Injectable} from '@angular/core';
import {Credentials} from '../models/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean;

  constructor() {
  }

  login(credentials: Credentials) {
    const loginResult = credentials.userName === 'admin' && credentials.password === 'secret';
    this.isLoggedIn = loginResult;
    return loginResult;
  }
}
