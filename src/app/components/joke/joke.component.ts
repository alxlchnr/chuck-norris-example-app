import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {JokeService} from '../../services/joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  joke: string;

  constructor(private jokeService: JokeService) {
  }

  ngOnInit() {
  }

  showJoke() {
    this.jokeService.fetchJoke()
      .subscribe(joke => this.joke = joke);
  }

}
