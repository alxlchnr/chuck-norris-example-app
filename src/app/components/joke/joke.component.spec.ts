import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {of} from 'rxjs';
import {JokeService} from '../../services/joke.service';

import {JokeComponent} from './joke.component';

describe('JokeComponent', () => {
  let component: JokeComponent;
  let fixture: ComponentFixture<JokeComponent>;
  let jokeServiceMock: any;
  const expectedJoke = 'expectedJoke';

  beforeEach(async(() => {
    jokeServiceMock = jasmine.createSpyObj(['fetchJoke']);
    jokeServiceMock.fetchJoke.and.returnValue(of(expectedJoke));

    TestBed.configureTestingModule({
      declarations: [JokeComponent],
      providers: [
        {
          provide: JokeService,
          useValue: jokeServiceMock
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show joke from joke service', () => {
    expect(fixture.debugElement.query(By.css('#joke'))).toBeFalsy();
    component.showJoke();
    expect(component.joke).toBe(expectedJoke);
    fixture.detectChanges();
    const div: HTMLElement = fixture.debugElement.query(By.css('#joke')).nativeElement;
    expect(div.innerText).toEqual(expectedJoke);

  });
});
