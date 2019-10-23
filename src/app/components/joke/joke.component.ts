import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  joke: string;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  showJoke() {
    this.httpClient.get('http://api.icndb.com/jokes/random').pipe(
      map(response => response['value']),
      map(response => <string>response['joke'])
    ).subscribe(joke => this.joke = joke);
  }

}
