// it might be said:
import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-some-people',
  templateUrl: './some-people.component.html',
  styleUrls: ['./some-people.component.css']
})

export class SomePeopleComponent implements OnInit {
  // so here class has access to this data used in a loop in the html as people
  selectedPerson: Person;
  people: Person[];
  constructor(private personService: PersonService) {}

  getPeople(): void {
    this.personService.getPeople()
        .subscribe(people => this.people = people)
  }

  ngOnInit() {
    this.getPeople();
  }

  onSelect(person: Person): void {
    this.selectedPerson = person;
    console.log(this.selectedPerson)

  }

}


