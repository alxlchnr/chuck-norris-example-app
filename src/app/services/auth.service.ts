import {Injectable} from '@angular/core';
import {Credentials} from '../models/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  login(credentials: Credentials) {
    return credentials.userName === 'admin' && credentials.password === 'secret';
  }
}
