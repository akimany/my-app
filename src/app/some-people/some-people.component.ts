// it might be said:
import { Component, OnInit } from '@angular/core';
import { Person } from '../person'
import { PEOPLE } from '../somePeople'

@Component({
  selector: 'app-some-people',
  templateUrl: './some-people.component.html',
  styleUrls: ['./some-people.component.css']
})
export class SomePeopleComponent implements OnInit {
  people = PEOPLE
  selectedPerson : Person

  constructor() { }

  ngOnInit() {
  }

  onSelect(person: Person): void {
    this.selectedPerson = person
  }

}


