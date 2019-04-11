// it might be said:
import { Injectable } from '@angular/core';
import { Person } from './person';
import { PEOPLE } from './somePeople';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PersonService {

  constructor() { }

  getPeople(): Observable<Person[]> {
    return of(PEOPLE);
  }

}
