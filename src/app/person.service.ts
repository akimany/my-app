// it might be said:
import { Injectable } from '@angular/core';
import { Person } from './person';
import { PEOPLE } from './somePeople';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})

export class PersonService {

  constructor(private messageService: MessageService) { }

  getPeople(): Observable<Person[]> {
    this.messageService.add('Person service: fetched people names')
    return of(PEOPLE);
  }

}
