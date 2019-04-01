import { Injectable } from '@angular/core';
import { Person } from './person';
import { PEOPLE } from './somePeople';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  getPeople(): Person[] {
    return PEOPLE;
  }
}
