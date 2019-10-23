import {of} from 'rxjs';
import {JokeService} from './joke.service';

describe('JokeService', () => {
  let jokeService: JokeService;
  const expectedJoke = 'expectedJoke';
  let httpClientMock: any;

  beforeEach(() => {
    httpClientMock = jasmine.createSpyObj(['get']);
    httpClientMock.get.and.returnValue(of({value: {joke: expectedJoke}}));
    jokeService = new JokeService(httpClientMock);
  });

  it('calls correct url and cuts joke from response', () => {
    jokeService.fetchJoke().subscribe(joke => {
      expect(joke).toBe(expectedJoke);
      expect(httpClientMock.get).toHaveBeenCalledWith('http://api.icndb.com/jokes/random');
    });
  });

});
