import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private httpClient: HttpClient) { }

  fetchJoke(): Observable<string>{
    return this.httpClient.get('http://api.icndb.com/jokes/random').pipe(
      map(response => response['value']),
      map(response => <string>response['joke'])
    )
  }
}
